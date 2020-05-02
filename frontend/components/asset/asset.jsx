import React from 'react';
import Graph from '../graph/graph'



class Asset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

    this.props.fetchStock(this.props.symbol);
  }
  // all data restructuring should occur at the asset_container.jsx; by the time it 
  // hits the return of the render
  // the data shold be shaped like so:
  // [
  //   {name: "AAPL", price: 400, low: 200, date: someDate }
  //   {name: "AAPL", price: 400, low: 200, date: someDate }
  //   {name: "AAPL", price: 400, low: 200, date: someDate }
  //   {name: "AAPL", price: 400, low: 200, date: someDate }
  // ]

  render() {


    if (!this.props.data) return null
      return (
        <div>
          <div>
            stok price:
            {this.props.symbol}
            <Graph data={this.props.data} />
          </div>
        </div>
      );
  }
}

export default Asset;
