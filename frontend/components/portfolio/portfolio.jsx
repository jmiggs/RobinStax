// import {
//   // Route,
//   // Redirect,
//   // Switch,
//   // Link,
//   // HashRouter
// } from 'react-router-dom';

import React from 'react';
import GraphContainer from '../graph/portfolio_graph_container'
import News from './news'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raining: true
    };

  }

  componentDidUpdate() {
    this.props.fetchUserStocks(this.props.currentUser)
      .then(data =>
        this.props.fetchBatch5D(data));
    // this.props.fetchAllNews();
    // this.props.fetchTransactions();
  }

  componentDidMount() {
    this.props.fetchUserStocks(this.props.currentUser)
      .then(data =>
        this.props.fetchBatch5D(data));
    // this.props.fetchAllNews();
    
  }

  render() {
    if (!this.props.news) return null;
    return(
      <div>
        <GraphContainer />
        <div className="news">
          <div className="news-headertext">News</div>
          <News news={this.props.news} />
        </div>

      </div>


    )
  }
}

export default Portfolio;
