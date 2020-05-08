// import {
//   // Route,
//   // Redirect,
//   // Switch,
//   // Link,
//   // HashRouter
// } from 'react-router-dom';

import React from 'react';
import GraphContainer from '../graph/portfolio_graph_container'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // this.readMore = this.readMore.bind(this);
  }

  componentDidUpdate() {

    this.props.fetchUserStocks(this.props.currentUser).then(data =>
      this.props.fetchBatch5D(data))
    }

  componentDidMount() {

    // this.props.fetchAll()

    this.props.fetchUserStocks(this.props.currentUser).then(data =>
      this.props.fetchBatch5D(data))
  }


  render() {

    return(
      this.props.status === 'empty?'? <div> no stonks yet</div> :
      <div>stonks
          <GraphContainer />



      </div>


    )
  }
}

export default Portfolio;
