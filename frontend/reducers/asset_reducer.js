import { RECEIVE_STOCK, RECEIVE_STOCKs } from '../actions/asset_actions';

const assetReducer = (state = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_STOCKs:
      return Object.assign({}, state, { stock: action.stock });
    default:
      return state;
  }
};

export default assetReducer;