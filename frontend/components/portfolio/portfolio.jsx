// import {
//   // Route,
//   // Redirect,
//   // Switch,
//   // Link,
//   // HashRouter
// } from 'react-router-dom';

import React from 'react';
import GraphContainer from '../graph/portfolio_graph_container';
import News from './news';
import Empty from './empty';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: false
    };

  }

  componentDidUpdate(prevProps) {

    if (this.props.portfolio && prevProps.portfolio) {
      if (Object.keys(this.props.portfolio) !== Object.keys(prevProps.portfolio)) {
        this.props.fetchUserStocks(this.props.currentUser)
          .then(data => {

            if (data[0] === 'nostocks') {
              this.setState({empty: true})
            } else (
              this.props.fetchBatch5D(data)
            )
            this.props.fetchBatch5D(data)
          });
      }
    }
    
    // this.props.fetchAllNews();
    // this.props.fetchTransactions();
  }

  componentDidMount() {
    this.props.fetchUserStocks(this.props.currentUser)
      .then(data => {
        // debugger
       
        if (data[0] === 'nostocks') {
          this.setState({empty: true})
        } else (
          this.props.fetchBatch5D(data)
        )
        // err => console.log(err))
      }).fail(err => {
      
        this.setState({empty: true})
      })
    this.props.fetchAllNews();
  }

 

  render() {
    if (!this.props.news) return null;
    return(
      <div>
        {this.state.empty? <Empty /> :<GraphContainer />}
        <div className="news">
          <div className="news-headertext">News</div>
          <News news={this.props.news} />
        </div>
      </div>
    )
  }
}

export default Portfolio;
