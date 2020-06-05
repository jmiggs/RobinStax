import { RECEIVE_BATCH, RECEIVE_EMPTY, RECEIVE_ALL_NEWS, RECEIVE_BATCH_QUOTE, RECEIVE_ALL_STOCKS } from '../actions/asset_actions';
import { RECEIVE_TRANSACTIONS } from '../actions/transactions_actions';
import { LOGOUT_CURRENT_USER, CLEAR_STATE } from '../actions/session_actions';

const assetReducer = (state = {}, action) => {
  // need to flatten stateshape

  switch (action.type) {
    case RECEIVE_BATCH:
      return Object.assign({}, state, { portfolio: action.data });
    case RECEIVE_BATCH_QUOTE:
      return Object.assign({}, state, { portfolioQuotes: action.data });
    case LOGOUT_CURRENT_USER:
        return Object.assign({}, state, { portfolio: null });
    case RECEIVE_EMPTY:
      return Object.assign({}, state, { emptystatus: action.data });
    case RECEIVE_ALL_NEWS:
      return Object.assign({}, state, { news: action.data.articles });
    case RECEIVE_TRANSACTIONS:
      return Object.assign({}, state, { numShares: action.data });
    case RECEIVE_ALL_STOCKS:
      return Object.assign({}, state, { allStocks: action.data });
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default assetReducer;