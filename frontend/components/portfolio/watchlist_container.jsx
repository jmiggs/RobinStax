import React from 'react';
import Watchlist from './watchlist';
import { connect } from 'react-redux';
import { fetchWatchlist } from '../../actions/watchlist_actions'


const mapStateToProps = (state) => ({
  wl: state.entities.watchlists.currWl
});

const mapDispatchToProps = (dispatch) => ({
  fetchWatchlist: (id) => dispatch(fetchWatchlist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);