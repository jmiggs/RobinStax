import React from 'react';

//receives a single data point as props
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // counter componenet is recieving a single OBJECT from graph, the very first data point
      // append data feild to .data to key into the data object
      price: this.props.data.price,
      latestPrice: this.props.data.price,
      first: this.props.first.price,
      delta: null, 
      percentDelta: ""
    };
  }

  updateCounterOnTabChange(data2, data1) {

    let newDelta = data2.price - data1.price;
    let newPercentDDelta = ((data2.price - data1.price)/ data2.price) * 100;

    this.setState({
      first: data1.price,
      delta: newDelta,
      percentDelta: newPercentDDelta
    })
  }

  updateCounter(data)  {

    this.setState({
      price: data.payload.price, 
      delta: data.payload.price - this.state.first,
      percentDelta: ((data.payload.price - this.state.first) / data.payload.price) * 100
    })
  }

  updateCounterOnLeave(data2, data1) {

    let newDelta = data2.price - data1.price;
    let newPercentDDelta = ((data2.price - data1.price)/ data2.price) * 100;

    this.setState({
      price: data2.price, 
      delta: newDelta,
      percentDelta: newPercentDDelta
    })
  }

  componentDidMount() {

    let newDelta = this.state.latestPrice - this.state.first;
    let newPercentDDelta = ((this.state.latestPrice - this.state.first) / this.state.latestPrice) * 100;
    this.setState({
        delta: newDelta,
        percentDelta: newPercentDDelta
    })
  }

  render() {

      // if (!this.state.delta) return null;

      return (
        <div>
          ${(this.state.price).toFixed(2)}
          <br/>
          {this.state.delta < 0?  '-' : '+'}
          {!this.state.delta? `$${this.state.price.toFixed(2)}` : `$${Math.abs(this.state.delta.toFixed(2))}`  }
            

          {this.state.percentDelta < 0?  '-' : '+'}
          {!this.state.percentDelta?  `[${0.0.toFixed(2)}]` : `[${Math.abs(this.state.percentDelta.toFixed(2))}%]`}
            
        </div>
      );
  }
}

export default Counter;