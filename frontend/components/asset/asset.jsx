import React from 'react';
import GraphContainer from '../graph/graph_container'
import Earnings from './earnings'



class Asset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'more',
      read: 'less'
    };

    this.tickRef = React.createRef()
    this.showMore = this.showMore.bind(this)
    // this.readMore = this.readMore.bind(this);
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
      // this.props.fetchNews(this.props.symbol)
      this.tickRef.current.updateYticks()
    }
  } 

  showMore(e) {

    e.preventDefault();
      var element = document.getElementById("extrarows");
      element.classList.toggle("extra-toggle");

      if (this.state.show === 'more') {
        this.setState({show: 'less'})
      } else {
      this.setState({show: 'more'})
      };
  }

  readMore(e) {
    e.preventDefault();

    if (this.state.read === 'less') {
      this.setState({read: 'more'})
    } else {
      this.setState({read: 'less'})
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

      return (
        <div>
          <div>
            <h1 className="company-name">{this.props.data.companyName}</h1>
            <div className="linegraph-container">
              <GraphContainer symbol={this.props.symbol} />
            </div>

            <div>
              <div className="about-container">
                <div className="about-head">About:</div>
                <div>
                  <button onClick={(e) => this.showMore(e)} className="showmore">
                  
                  {this.state.show === 'more'? <p>Show More</p> : <p>Show Less</p> }
                 
                  </button>
                </div>
              </div> 
              <div className="description-container">
                <div id="descri" className={this.state.read}>{info.description}</div>
                <div className="read-button-container">
                  <button className="read-button" onClick={(e) => this.readMore(e)}>
                    {this.state.read === 'less'? <p>Read More</p> : <p>Read Less</p>}
                  </button>
                </div>
              </div>
 

              {/* FIRST ROW */}
              <div className="entire-data-container">
                <div className="data-container">
                  <div className="first-row-info datarows">
                    <div>
                      <div className="data-key">CEO:  </div>
                      <div>{info.CEO}</div>
                    </div> 
                    <div>
                      <div className="data-key">Employees:</div> 
                      <div>{info.employees}</div>
                    </div>
                    <div>
                      <div className="data-key">Headquarters:</div>
                      <div>{info.city},{info.state}</div>
                    </div>
                    <div>
                      <div className="data-key">Exchange:</div>
                      <div>{info.exchange}</div>
                    </div>
                  </div>
                  {/* /* SECOND ROW */}
                  <div className="secondrow-data datarows">

                    {/* need additional logic for formatting */}
                    <div>
                      <div className="data-key">Market Cap:</div> 
                      <div>${this.MoneyFormat(data.marketCap)}</div>
                    </div>
                    <div>
                      <div className="data-key">52-Week Hi:</div> 
                      <div>${data.week52High}</div>
                    </div>

                    <div>
                      <div className="data-key">52-week Low:</div> 
                      <div>${data.week52Low}</div>
                    </div>

                    <div> 
                      <div  className="data-key">PE Ratio:</div> 
                      <div>{data.peRatio}</div>
                    </div>
                  </div>
                </div>
                  
                <div className="extra-toggle" id="extrarows">
                  <div className="extrarow datarows">
                    <div>
                        <div className="data-key">Open Price: </div>{!data.open ? <div>${data.previousClose.toFixed(2)}</div> : <div>${data.open.toFixed(2)}</div> }
                    </div>

                    <div>
                      <div className="data-key">High Today:</div> 
                      <div>{!data.high? `TBD` : data.high}</div>
                    </div>

                    <div> 
                      <div className="data-key">Low Today:</div>
                      <div> {!data.low?  `TBD` : data.low} </div>
                    </div>

                    <div>
                      <div className="data-key">Avg Vol:</div> 
                      <div>{this.MoneyFormat(data.avgTotalVolume)}</div>
                    </div>
                  </div>

                  <div className="extrarow datarows lastrow">
                    <div>
                      <div className="data-key">Website:</div> 
                      <div>{!info.website? `N/A` : info.website}</div>
                    </div>

                    <div> 
                      <div className="data-key">Sector:</div>
                      <div> {!info.sector?  `N/A` : info.sector} </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>


            </div>

            <Earnings ref={this.tickRef} data={this.props.earnings}/>
            
          
          </div>
        </div>
      );
  }
}

export default Asset;
