import { RECEIVE_WATCHLISTS } from '../actions/watchlist_actions';
import { RECEIVE_WATCHLIST } from '../actions/watchlist_actions';

const watchlistReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_WATCHLISTS:
      return Object.assign({}, state, {wls: action.data})
    default:
      return state;
  }
};

export default watchlistReducer;