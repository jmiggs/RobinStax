import { RECEIVE_BATCH, RECEIVE_EMPTY } from '../actions/asset_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const assetReducer = (state = {}, action) => {
  // need to flatten stateshape

  switch (action.type) {
    case RECEIVE_BATCH:
      return Object.assign({}, state, { portfolio: action.data });
    case LOGOUT_CURRENT_USER:
        return Object.assign({}, state, { portfolio: null })
    case RECEIVE_EMPTY:
      return Object.assign({}, state, { emptystatus: action.data })
    default:
      return state;
  }
};

export default assetReducer;