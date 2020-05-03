import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // counter componenet is recieving a single OBJECT from graph, the very first data point
      // append data feild to .data to key into the data object
      price: this.props.data.price,
    };
  }

  updatePrice(data)  {
    this.setState({price: data.payload.price})
  }

  render() {

      return (
        <div>
          {this.state.price}
        </div>
      );
  }
}

export default Counter;