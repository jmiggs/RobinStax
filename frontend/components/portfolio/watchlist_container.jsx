import React from 'react';
import Watchlist from './watchlist';
import { connect } from 'react-redux';
import { fetchWatchlist, deleteWatchlistItem, deleteWatchlist } from '../../actions/watchlist_actions'


const mapStateToProps = (state) => ({
  wl: state.entities.watchlists.currWl,
  wlItems: state.entities.watchlists.wlItems
});

const mapDispatchToProps = (dispatch) => ({
  fetchWatchlist: (id) => dispatch(fetchWatchlist(id)),
  deleteWatchlistItem: (wlItemId, wlId) => dispatch(deleteWatchlistItem(wlItemId, wlId)),
  deleteWatchlist: (id) => dispatch(deleteWatchlist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);