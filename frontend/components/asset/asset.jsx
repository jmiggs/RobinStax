import React from 'react';
import GraphContainer from '../graph/graph_container'



class Asset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // initial fetch of stock. triggers 5D AJAX call

  // need to add ajax call for companyname
  //this is for initial render!! need to update to get quote and stuff
  // componentDidMount() {
  //   this.props.fetchStock(this.props.symbol);
  //   // this.props.fetchQuote(this.props.symbol)
  // }

  // this is for when user moves from AAPL to MSFT; 
  // params UPDATE, and so we must trigger a new fetchstock
  componentDidUpdate(prevProps) {

    if (prevProps.symbol !== this.props.symbol) {
      this.props.fetch5D(this.props.symbol)
    }
  } 

  render() {

    // will use this conditinal to see if News and analyst ratings are null!!!
    // if (!this.props.data) return null
      return (
        <div>
          <div>
            stok price:
            {this.props.symbol}
            <GraphContainer symbol={this.props.symbol} />

          </div>
        </div>
      );
  }
}

export default Asset;
