import React from 'react';
import GraphContainer from '../graph/graph_container'
import Earnings from './earnings'



class Asset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.tickRef = React.createRef()
  }

  // initial fetch of stock. triggers 5D AJAX call

  // need to add ajax call for companyname
  //this is for initial render!! need to update to get quote and stuff
  componentDidMount() {

    this.props.fetchStockQuote(this.props.symbol);
    this.props.fetchInfo(this.props.symbol)
    this.props.fetchNews(this.props.symbol)
    // this.props.fetchEarnings(this.props.symbol)
    // this.props.fetchQuote(this.props.symbol)
  }

  // this is for when user moves from AAPL to MSFT; 
  // params UPDATE, and so we must trigger a new fetchstock
  componentDidUpdate(prevProps) {
  
    if (prevProps.symbol !== this.props.symbol) {
      this.props.fetchStockQuote(this.props.symbol);
      this.props.fetch5D(this.props.symbol);
      this.props.fetchInfo(this.props.symbol)
      // this.props.fetchEarnings(this.props.symbol)
      this.props.fetchNews(this.props.symbol)
      this.tickRef.current.updateYticks()
    }
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

    // will use this conditinal to see if News and analyst ratings are null!!!
    if (!this.props.data || !this.props.info) return null
    let { data, info, news } = this.props
    debugger
      return (
        <div>
          <div>
            <h1 className="company-name">{this.props.data.companyName}</h1>
            
            <GraphContainer symbol={this.props.symbol} />

            <div>
              <div className="about-cont">
                <div className="about-head">About:</div>
                <div><button className="readmore"><p>Read More</p></button></div>
              </div> 
              <div className="descri">{info.description}</div>
              <br/>
              <div>CEO: {info.CEO}</div>
              <div>employees: {info.employees}</div>
              <div>Location: {info.city},{info.state}</div>
              {/* /* key data */}
              <div>Open Price: </div>{!data.open ? <div>${data.previousClose.toFixed(2)}</div> : <div>${data.open.toFixed(2)}</div> }
              {/* need additional logic for formatting */}
              <div>Market Cap: ${this.MoneyFormat(data.marketCap)}</div>
              <div>High Today: ${data.high}</div>
              <div>Low Today: ${data.low}</div>
              <div>PE Ratio: {data.peRatio}</div>
              <div>52-Week Hi: ${data.week52High}</div>
              <div>52-week Lo: ${data.week52Low}</div>
              <div>Avg Vol: {this.MoneyFormat(data.avgTotalVolume)}</div>
              <div>Volume: {this.MoneyFormat(data.volume)}</div>
            </div>

            <Earnings ref={this.tickRef} data={this.props.earnings}/>
            
          
          </div>
        </div>
      );
  }
}

export default Asset;
