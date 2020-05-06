import { RECEIVE_TRANSACTION } from '../actions/transactions_actions';

const assetReducer = (state = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      return state;
    default:
      return state;
  }
};

export default assetReducer;