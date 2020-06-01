# RobinStax

With RobinStax, you can 'mock' invest in the stock market! Build your very own portfolio cost-free, and once you're ready, you can take it to the real markets.

## Technlogies

RobinStax is built on **Ruby on Rails, PosgresSQL, JavaScript, React.js, and Redux.js.**
Additionally, RobinStax uses **IEX Cloud API** to capture real-time market information, such as stock quotes and historical data. RobinStax uses **AJAX** calls to request information from IEX, takes the data in, and formats the data for useability.
RobinStax also uses **Recharts**, a chart library powered by **D3**, to display the data from IEX in the form of dynamic charts.

Here's what a user's portfolio looks like:
![alt text](https://i.imgur.com/N4pZcfN.png)

### IEX Cloud API

**IEX API** offers a wide variety of possible GET requests to capture real-time market information, as well as other information about a publicly listed company. RobinStax heavily relies on IEX to produce the content shown in the Portfolio page and a Company's page. As noted above, RobinStax uses **AJAX** requests to obtain related information that it uses. Here's an example of an **AJAX** call for a stock quote:

```javascript
export const fetchQuote = (sym) => (
  $.ajax({
    method: 'GET',
    url: `https://sandbox.iexapis.com/stable/stock/${sym}/quote?token=${window.iexkkaccess}`,
  })
)
```
The fetched information is then saved to state, made accesible to components via the ```Redux``` cycle, and used by the components that need that information.

It should be noted that RobinStax is currently using IEX's Sandbox API, which is the free version used in development stages. As such, some of the information provided by the Sandbox API is marginally inaccurate, or will provide dummy data. This can be seen in the 'About' section of a Company's page.

### Recharts

Recharts is a powerful React library containing a wide variety of useable charts, all made possible through D3 technology. RobinStax uses Recharts to display the graphs visible on the Portfolio page and also a Company's page. After fetching data using **IEX API**, the data from the GET request is passed to a Chart from the Recharts library. Here's how the LineChart seen on a company's page is structured:

```javascript
<LineChart
  onMouseLeave={(e) => this.handleMouseLeave(e)}
  width={750}
  height={300}
  data={this.props.data}
  margin={{
    top: 5, right: 30, left: 0, bottom: 5,
  }}
>
<YAxis 
  domain={["dataMin", "dataMax"]} 
  axisLine={{ stroke: 'white' }} 
  tick={false} 
  hide={true} 
/>
<XAxis 
  axisLine={{ stroke: 'white' }} 
  tick={false} 
/>
<Tooltip 
  content={<CustomTooltip />} 
  position={{y:-30}} 
  isAnimationActive={false}  
/>
<Line 
  connectNulls 
  strokeWidth="3px" 
  stroke="#0CABDA" 
  type="monotone" 
  dataKey="price" 
  domain={["dataMin", "dataMax"]} 
  dot={false} 
  activeDot={this.renderCounter.bind(this)} 
/>
</LineChart>
```
Each of the components (such as XAxis, YAxis) are all imported from the Recharts library and are used to produce the LineChart component and its visible elements.

## Features

### Buy/Sell

One of the main features of RobinStax is the ability of a user to buy and sell stock. First, a user can use the search bar to enter a company's stock symbol. Then, the company's information page is rendered, and also a Quick Menu on the right which will allow the user to buy or sell an amount of the stock.

![alt texst](https://im2.ezgif.com/tmp/ezgif-2-457bef0d2c8f.gif)

The Quick Menu is a single component that allows Buy/Sell capability dynamically based on it's current state. The tranasction type is saved on the component's state as **'transtype'**, which will determine either Buy or Sell elements.

When a user clicks either of the Buy or Sell buttons, this will then trigger a state change to render the according tab and function. Here's what the Buy button looks like that triggers the Quick Menu to have Buy functionality:
```javascript
<button 
  className={this.state.transtype === 'buy'? "active-tab":"buy-sell"} 
  onClick={() => this.switchToBuy()}>
  Buy {this.props.data.symbol}
</button>
```

After a user completes a transaction, the amount of shares is calculated; and the change will be visible in the Quick Menu on the user's portfolio. 

Users 'own' shares through an **ActiveRecord** model ```Transaction ```, which acts as a joins table between the ```User``` model and the ```Asset``` model.
The amount of shares a user has is then determined by summing up the amount of shares of all transactions with ```transtype
``` Buy, and then subtracting the sum of all transactions with ```transtype``` Sell. The result is then rendered on the Quick Menu.

### Watchlists

Another feature is the ability of a user to create Watchlists, where users can keep track of companies they are interested in. From the Portfolio page, a user can create a Watchlist. Then, from a company's page, a user can either add that company to a single watchlist, or multiple at a single time. Here's a quick demo:

![alt text](https://im2.ezgif.com/tmp/ezgif-2-a96cdff42014.gif)

The Watchlist component fetches the companies related to it from the database, and subsequently uses the response to fetch market information using the **IEX API**. Similar to how users own shares through a joins table noted in the previous section, a ```Watchlist``` has items through an  **ActiveRecord** association with ```Watchlistitem```. The Watchlist component sends a GET request for the corresponding Watchlist, and **JSON JBuilder** is used to send a response with that Watchlist's related information. Here's what this call looks like:

**The Action Creator:**
``` javascript
export const fetchWatchlist = (id) => (dispatch) => {
  WLutil.fetchWatchlist(id).then(data => {
    (dispatch(receiveWatchlist(data)));
  ...
  ...
  }
```
**The AJAX Request:**
```javascript
export const fetchWatchlist = (id) => (
  $.ajax({
    method: 'Get',
    url: `api/watchlists/${id}`,
  })
);
```
**The Response:**
```
wlItems: Array(4)
  0: {ticker: "AAPL"}
  1: {ticker: "MSFT"}
  2: {ticker: "GOOGL"}
  3: {ticker: "TSLA"}
```

A second request within the action creator is made using the response's wlItems, which contains the Watchlist's items. This request is made to the **IEX API**. ```wlItems``` is manipulated into a string as query params that fits into the an appropriate string used for the GET request:

**The Second Request:**
``` javascript
export const fetchWatchlist = (id) => (dispatch) => {
  WLutil.fetchWatchlist(id).then(data => { 
    (dispatch(receiveWatchlist(data)));
    ...
    ...
    WLutil.fetchWatchlistInfo(data).then(wlInfo => {
      dispatch(receiveWlItems(wlInfo))
    },
      err => (dispatch(receiveErrors(err.responseJSON)))
    )
  }
  ...
  ...
}
```

**The Second AJAX:**
Here, ```wlItems``` is manipulated to a string to fit into the ```var url``` as query parameters.

```javascript
export const fetchWatchlistInfo = (wlInfo) => {

  let wlItems = wlInfo.wlItems;
  let toFetch = [];

  for (let i = 0; i < wlItems.length; i++) {
    if (!toFetch.includes(wlItems[i].ticker)) {
      toFetch.push(wlItems[i].ticker)
    }
  }

  var url = `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${toFetch.join()}&types=quote&token=${window.iexkkaccess}`
  return(
  $.ajax({
    method: 'GET',
    url: `${url}`
  }))
}
```

Finally, the information for each of the companies in ```wlItems``` is saved to state and rendered by the Watchlist component accordingly!

## Highlights

Working on this project had its joys and thrills, but the most interesting part of this project was undoubtedly having to explore the capabilities of Recharts and React components to produce the line charts on RobinStax. One particular aspect of the line chart that showcase these capabilities is this feature where the displayed price, delta, and percent delta updates as the user hovers across the line chart, and reverts back to the latest information upon the cursor leaving the graph:

![alt text](https://im2.ezgif.com/tmp/ezgif-2-ce9df5d3a3be.gif)

### The Line and the Counter

To implement this, a combination of interesting React methods and specific Recharts properties were leveraged. The LineChart is defined in a parent Graph Component As previously noted, the LineChart itself is a React componenet imported from the Recharts library, along with other components that act as supplementary elements to produce the properties of the LineChart. For example, if a LineChart needs to display an x-axis, then a specific XAxis component from the Recharts library is used. *see Recharts section above for LineChartstructure*

Evidently, the **Line** component of a LineChart is used to display the blue line that represents the time-series data we see on the graph. This Line component has a built-in property called `activeDot`, which carries a payload of information from the graph depending on where the cursor is on the Line. This payload contains the time-series data to be used. Here's a snippet of the payload when the cursor is on a single point on the Line:

```
payload:
  date: "2020-05-22"
  label: "09:40"
  price: 317.772265
```

The numbers above the graph that display price, delta, and percent delta are from a custom component called **Counter**, which is also defined in the Graph parent component. It should be noted that this custom component **is not** part of the Recharts library, and is therefore not a built-in supplementary element of the LineChart. Because of this, **the issue of passing the payload from the Line's `activeDot` to the Counter arises**. 

### React Refs

Because the Line and the Counter are unrelated through Recharts, and also don't have a parent-sibling relationship, a different (and very interesting) approach to updating the Counter with the ```activeDot```'s current payload was taken. Essentially, a custom function that takes in the payload is invoked as the `activeDot` changes, which in turn invokes another function defined in the Counter. This is made possible through React Refs, which gives the Graph Component access to invoke the Counter.

First, the Ref is defined on the LineChart's parent component Graph:
```javascript
  this.refCounter = React.createRef();
```
and the Counter is issued this ref:

```javascript
<Counter  
 ref={this.refCounter}
 ...
/>
```

Now, the ```this.refCounter```on the Graph has access to the Counter's methods and can be invoked from the Graph! With this, a function defined on the Graph ```renderCounter()``` can be invoked everytime the `activeDot` changes. Here's what the Line's `activeDot` and ```renderCounter()``` looks like:
```javascript
<Line 
  ...
  ...
  activeDot={this.renderCounter.bind(this)} 
/>
```
```javascript
renderCounter(e) {
 this.refCounter.current.updateCounter(data);
}
```
As previously noted, the `activeDot` carries the current payload, and this payload is passed to `renderCounter()` as `data` upon invokation. This function invokes `updateCounter(data)`, defined on the Counter, and made accessible to the Graph component through the ref! The Counter's ```updateCounter()``` triggers a state change using the payload's information, which in turn triggers the Counter to rerender. This is the final result where we succesfully get the ```activeDot```'s current payload information to render on the Counter.

```javascript
updateCounter(data)  {
  this.setState({
    price: data.payload.price, 
    delta: data.payload.price - this.state.first,
    percentDelta: ((data.payload.price - this.state.first) / data.payload.price) * 100
  })
}
```

And Voila! As the ```activeDot``` changes upon mouse hover on the Line, the Counter sucessfully updates with the ```activeDot```'s current information.

