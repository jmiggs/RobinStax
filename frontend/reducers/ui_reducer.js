import { RECEIVE_POST_SUCCESS, CLEAR } from "../actions/watchlist_actions";
import { RECEIVE_WL_ERRORS } from "../actions/watchlist_actions";
import { RECEIVE_SUCCESS_BUY, RECEIVE_FAILED_SELL } from "../actions/transactions_actions";

const UIReducer = (state = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_POST_SUCCESS:
      return Object.assign({}, state, { notif: action.data })
    case RECEIVE_WL_ERRORS:
      return Object.assign({}, state, { notif: action.status })
    case RECEIVE_SUCCESS_BUY:
      return Object.assign({}, state, { notif: action.status })
    case RECEIVE_FAILED_SELL:
      return Object.assign({}, state, { notif: action.status })
    case CLEAR:
      return {}
    default:
      return state;
  }
};

export default UIReducer;