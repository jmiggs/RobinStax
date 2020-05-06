// import {
//   // Route,
//   // Redirect,
//   // Switch,
//   // Link,
//   // HashRouter
// } from 'react-router-dom';

import React from 'react';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // this.readMore = this.readMore.bind(this);
  }

  

  componentDidMount() {
    this.props.fetchUserStocks(this.props.currentUser).then(data =>
      this.props.fetchBatch5D(data))
  }


  render() {
    return(
      <div>stonks</div>


    )
  }
}

export default Portfolio;
