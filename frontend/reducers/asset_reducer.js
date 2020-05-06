import { RECEIVE_BATCH } from '../actions/asset_actions';

const assetReducer = (state = {}, action) => {
  // need to flatten stateshape
  switch (action.type) {
    case RECEIVE_BATCH:
      return Object.assign({}, state, { fiveday: action.data });
    default:
      return state;
  }
};

export default assetReducer;