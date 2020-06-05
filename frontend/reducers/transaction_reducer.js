import { RECEIVE_TRANSACTION } from '../actions/transactions_actions';
import { CLEAR_STATE } from '../actions/session_actions';

const assetReducer = (state = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      return state;
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default assetReducer;