import { RECEIVE_STOCK } from '../actions/asset_actions';

const assetReducer = (state = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_STOCK:
      return Object.assign({}, state, { stock: action.stock });
    default:
      return state;
  }
};

export default assetReducer;