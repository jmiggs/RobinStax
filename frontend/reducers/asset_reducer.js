import { RECEIVE_BATCH, RECEIVE_EMPTY, RECEIVE_ALL_NEWS } from '../actions/asset_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const assetReducer = (state = {}, action) => {
  // need to flatten stateshape

  switch (action.type) {
    case RECEIVE_BATCH:
      return Object.assign({}, state, { portfolio: action.data });
    case LOGOUT_CURRENT_USER:
        return Object.assign({}, state, { portfolio: null });
    case RECEIVE_EMPTY:
      return Object.assign({}, state, { emptystatus: action.data });
    case RECEIVE_ALL_NEWS:
      return Object.assign({}, state, { news: action.data.articles });
    default:
      return state;
  }
};

export default assetReducer;