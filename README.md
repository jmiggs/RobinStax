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

Users 'own' shares through an ActiveRecord model ```Transaction ```
The amount of shares a user has is then determined by summing up the amount of shares of all transactions with ```transtype
``` Buy, and then subtracting the sum of all transactions with ```transtype``` Sell. The result is then rendered on the Quick Menu.

### Watchlists

Another feature is the ability of a user to create Watchlists, where users can keep track of companies they are interested in. From the Portfolio page, a user can create a Watchlist. Then, from a company's page, a user can either add that company to a single watchlist, or multiple at a single time. Here's a quick demo:

![alt text](https://im2.ezgif.com/tmp/ezgif-2-a96cdff42014.gif)




## Highlights

One of the funnest things to work on for RobinStax was implementing the graphs on a user's portfolio page and the companies' stock pages. The Graph is from Recharts library (powered by D3), and so learning how to use the library took some time to research and experiment. 

*talk about chart code here and updating the counter. talk about Refs





