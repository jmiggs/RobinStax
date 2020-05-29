import React from 'react';
import Watchlist from './watchlist';
import { connect } from 'react-redux';
import { fetchWatchlist } from '../../actions/watchlist_actions'


const mapStateToProps = (state) => ({
  // wlId: ownProps.match.params.id
});

const mapDispatchToProps = (dispatch) => ({
  fetchWatchlist: (id) => dispatch(fetchWatchlist(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);