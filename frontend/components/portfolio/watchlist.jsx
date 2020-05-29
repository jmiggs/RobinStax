import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class Watchlist extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchWatchlist(this.props.match.params.id);
  }

  render() {

    return(
      <div className="WL">
        Watchlist
      </div>
    )
  }
}

export default withRouter(Watchlist);
