# RobinStax

With RobinStax, you can 'mock' invest in the stock market! Build your very own portfolio cost-free, and once you're ready, you can take it to the real markets.

## Technlogies

RobinStax is built on **Ruby on Rails, PosgresSQL, JavaScript, React.js, and Redux.js.**
Additionally, RobinStax uses **IEX Cloud API** to capture real-time market information, such as stock quotes and historical data. RobinStax uses AJAX calls to request information from IEX, takes the data in, and formats the data for useability.
RobinStax also uses **Recharts**, a chart library powered by **D3**, to display the data from IEX in the form of dynamic charts.

Here's what a user's portfolio looks like:
![alt text](https://i.imgur.com/N4pZcfN.png)


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

![alt text](https://im2.ezgif.com/tmp/ezgif-2-a57c5c04757b.gif)

Users 'own' shares through an ActiveRecord model ```Transaction ```
The amount of shares a user has is then determined by summing up the amount of shares of all transactions with ```transtype
``` Buy, and then subtracting the sum of all transactions with ```transtype``` Sell. The result is then rendered on the Quick Menu.

### Watchlists

Another feature is the ability of a user to create watchlists, where users can keep track of companies they are interested in.
**talk about how to do it, and throw some cool code in this section

## Highlights

One of the funnest things to work on for RobinStax was implementing the graphs on a user's portfolio page and the companies' stock pages. The Graph is from Recharts library (powered by D3), and so learning how to use the library took some time to research and experiment. 

*talk about chart code here and updating the counter. talk about Refs





