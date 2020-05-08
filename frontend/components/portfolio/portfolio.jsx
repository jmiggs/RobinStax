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
      raining: true

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

  makeItRain() {
    if (!this.state.raining) {
    this.setState({raining: true})
    } else {
      this.setState({raining: false})
    }
  }


  render() {
debugger
    return(

      <div>
        <div className="stonks">
          stonks


        </div>
          <GraphContainer />
      </div>


    )
  }
}

export default Portfolio;
