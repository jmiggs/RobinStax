import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Watchlist extends React.Component {
  constructor(props) {
    super(props);


    this.removeWlItem = this.removeWlItem.bind(this)
    this.deleteWatchlist = this.deleteWatchlist.bind(this)
  }

  componentDidUpdate(prevProps) {
 
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchWatchlist(this.props.match.params.id);
    }

    // if (prevProps.wl) {
    //   if (prevProps.wl.wlItems !== this.props.wl.wlItems) {
    //     this.props.fetchWatchlist(this.props.match.params.id);
    //   }
    // }

  }

  componentDidMount() {
    this.props.fetchWatchlist(this.props.match.params.id);
  }

  buildChart() {
    let wlItems = this.props.wlItems;

    return(
      <div className="chart">
        <div className="chart-headers">
          <div id="chart-row-name">Name</div>
          <div >Symbol</div>
          <div >Price</div>
          <div >Today</div>
          <div id='mcap'>Market Cap</div>
        </div>
       
        <div className="chart-rows">

          {Object.keys(wlItems).map(sym => {
            return(
              <div className="chart-row-el">     
                <div id="chart-row-name" className="el-name"> {wlItems[sym].quote.companyName} </div>
                <div> {sym} </div>
                <div> {wlItems[sym].quote.latestPrice} </div>
                <div> {wlItems[sym].quote.change} </div>
                <div id="market-cap-wl"> {this.MoneyFormat(wlItems[sym].quote.marketCap)} </div>
                <div className="wl-delete-item"> 
                  <button className="wl-delete-box" onClick={() => this.removeWlItem(wlItems[sym].quote.symbol, this.props.match.params.id )}> 
                    <FontAwesomeIcon icon="times" size="sm"   />
                  </button>               
                </div>
              </div>
            )
          })}
        </div>

      </div>
    )
  }

  deleteWatchlist(id) {
    this.props.deleteWatchlist(id);
    location.href = '#/'

    setTimeout(() => {window.reload()}, 600)

  }

  removeWlItem(wlItemId, listId) {

    this.props.deleteWatchlistItem(wlItemId, listId);
  }

  MoneyFormat(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+12
  
         ? (Math.abs(Number(labelValue)) / 1.0e+12).toFixed(2) + 'T'
    
         : Math.abs(Number(labelValue)) >= 1.0e+9
  
         ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
         // Six Zeroes for Millions 
         : Math.abs(Number(labelValue)) >= 1.0e+6
  
         ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
         // Three Zeroes for Thousands
         : Math.abs(Number(labelValue)) >= 1.0e+3
  
         ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
  
         : Math.abs(Number(labelValue));
  
    }

  render() {

    if (!this.props.wl) return null;
  

    return(
      <div className="wl-container">
        <div className="wl-header">
          <FontAwesomeIcon icon="lightbulb" className="list-icon" size="4x"   />
          <div className="wl-title" >
            {this.props.wl.name}
          </div>
          <div className="wl-header-last">
            <div className="wl-count">
              {!this.props.wlItems? `0`: Object.keys(this.props.wlItems).length} items 
            </div>
            <div className="delete-button">
              <button onClick={() => this.deleteWatchlist(this.props.match.params.id)}>Delete Watchlist </button>
            </div>
          </div>
        </div>
        <div className="wl-chart-container">
          {!this.props.wlItems? '':
            !this.props.wlItems.length?
              <div className="feels-empty-container">
                <p className="feels-empty-header">Feels a little empty in here...</p>
                <p>Search for companies to add and stay up to date.</p>
              </div>
            : this.buildChart()}
        </div>
      </div>
    )
  }
}

export default withRouter(Watchlist);
