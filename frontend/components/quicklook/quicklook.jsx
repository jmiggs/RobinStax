import React from 'react';
import AddModal from './add_modal'
import { Link } from 'react-router-dom';


class Quicklook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
      cost: '',
      transtype: 'buy',
      symbol: '',
      modalClass: 'modal-hide'
    };
    this.transType = 'buy';
    // this.preventText = this.preventText.bind(this)
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.modalRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchTransactions();
    this.props.fetchWatchlists();
  }

  handleSubmit(e) {
    e.preventDefault();
    const asset = {
      amount: this.state.amount,
      cost: this.state.cost,
      transtype: this.state.transtype,
      symbol: this.state.symbol
    };

    if (this.state.amount > this.props.numShares[this.props.data.symbol] && this.state.transtype === 'sell') {
      this.props.failedSell();
      return
    }
    if (!this.state.amount) {
      this.props.zeroBuy();
      return
    }

    let { latestPrice } = this.props.data;
    let estCost = latestPrice * this.state.amount;

    if (this.state.transtype === 'buy' && estCost > this.props.currentUser.buying_power) {
      this.props.failedBuy();
    } else {
        this.props.processForm(asset)
        location.href = "#/";
    }
    
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

  showModal() {
    this.modalRef.current.showModal();
  }
   

  render() {

    if (!this.props.data) return null;
    if (!this.props.numShares) return null
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
                  Shares Available: {this.props.numShares[this.props.data.symbol]? this.props.numShares[this.props.data.symbol]:0 }
                </div>
                :
                <div>
                  Buying Power: {this.props.numShares.bP.toLocaleString(`en`, {
                                                                    style: "currency",
                                                                    currency: "USD",
                                                                  })}
                </div>
              }
            </div>
            <div className="buy-button-container">
              <button type="submit" className="buy-button">Complete Transaction</button>
            </div>
          </form>
          {/* </form> */}
        </div>
        <div id="or-space"> Or </div>
        <div className="wl-button-container">
          <button className="wl-button" onClick={() => this.showModal()}>Add to WatchList</button>
        </div>
        <AddModal 
          ref={this.modalRef} 
          wls={this.props.wls} 
          sym={this.props.data.symbol} 
          processModalForm={this.props.processModalForm}
          // wlsMap={wlsMap} 
        />
      </div>
    )
  }
};


export default Quicklook;