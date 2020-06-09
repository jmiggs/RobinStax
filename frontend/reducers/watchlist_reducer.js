import { RECEIVE_WATCHLISTS, RECEIVE_WATCHLIST_ITEMS, CLEAR } from '../actions/watchlist_actions';
import { RECEIVE_WATCHLIST } from '../actions/watchlist_actions';
import { CLEAR_STATE } from './../actions/session_actions';

const watchlistReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_WATCHLISTS:
      return Object.assign({}, state, {wls: action.data})
    case RECEIVE_WATCHLIST:
      return Object.assign({}, state, {currWl: action.data})
    case RECEIVE_WATCHLIST_ITEMS:
      return Object.assign({}, state, {wlItems: action.data})
    case CLEAR:
      return Object.assign({}, state, {wlItems: []})
    case CLEAR_STATE:
      return {};

    default:
      return state;
  }
};

export default watchlistReducer;