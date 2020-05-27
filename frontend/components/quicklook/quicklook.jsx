import React from 'react';
import { Link } from 'react-router-dom';


class Quicklook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
      cost: '',
      transtype: 'buy',
      symbol: ''
    };
    this.transType = 'buy';
    // this.preventText = this.preventText.bind(this)
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTransactions();
  }

  handleSubmit(e) {
    const asset = { ...this.state };
    this.props.processForm(asset);
    location.href = '/'
  }

  update(e, field) {
    this.setState({ 
      [field]: e.currentTarget.value,
      cost: this.props.data.latestPrice,
      symbol: this.props.data.symbol
    })
  }

  switchToBuy() {
    if (this.state.transtype === 'sell') {
      this.setState({
        transtype: 'buy'
      })
    }
  }

  switchToSell() {
    if (this.state.transtype === 'buy') {
      this.setState({
        transtype: 'sell'
      })
    }
  }
   

  render() {

    if (!this.props.data) return null;
      let { latestPrice } = this.props.data;
      let estCost = latestPrice * this.state.amount;

    return(
      <div className="ql">
        <div className="transaction-links-container">
          <div className="trans-links1">
            <button 
              className={this.state.transtype === 'buy'? "active-tab":"buy-sell"} 
              onClick={() => this.switchToBuy()}>
              Buy {this.props.data.symbol}
            </button>
            <button 
              className={this.state.transtype === 'sell'? "active-tab":"buy-sell"}  
              onClick={() => this.switchToSell()}>
                Sell {this.props.data.symbol}
            </button>
          </div>
          <form className="shares-form-box" onSubmit={this.handleSubmit}>
            <div className="calc-container">
              <div className="trans-links2"> 
                <div>Shares</div>
                <div>
                  <input className="buy-input"
                    type="text"
                    value={this.state.sharesCount}
                    onChange={(e) => this.update(e,'amount')}
                    className="shares-input"
                    placeholder={this.state.amount}
                  /> 
                </div>
              </div>
              <div className="trans-links2">
                  <div>Market Price</div>
                  <div>${latestPrice.toFixed(2)}</div>
              </div>
              <div className="trans-links3">
                <div>Estimated {this.state.transtype === 'buy'? 'Cost' : 'Credit'} </div>
                <div>${(estCost.toLocaleString('en'))}</div>
              </div>
            </div>
            <div className="shares-avail">
              {this.state.transtype === 'sell'? 
                <div>
                  Shares Available: {this.props.numShares[this.props.data.symbol]}
                </div>
                :
                <div>
                  Buying Power Available
                </div>
              }
            </div>
            <div className="buy-button-container">
              <button type="submit" className="buy-button">Review Order</button>
            </div>
          </form>
          {/* </form> */}
        </div>
        <div id="or-space"> Or </div>
        <div className="wl-button-container">
          <button className="wl-button">Add to WatchList</button>
        </div>
      </div>
    )
  }
};


export default Quicklook;