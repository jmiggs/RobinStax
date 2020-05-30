import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Watchlist extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchWatchlist(this.props.match.params.id);
  }

  render() {
    if (!this.props.wl) return null;

    return(
      <div className="WL">
        <FontAwesomeIcon icon="lightbulb" className="list-icon" size="4x"   />
        {this.props.wl.name}
      </div>
    )
  }
}

export default withRouter(Watchlist);
