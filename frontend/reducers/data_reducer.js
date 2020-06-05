import { RECEIVE_DATA, RECEIVE_QUOTE, RECEIVE_INFO, RECEIVE_NEWS, RECEIVE_EARNINGS, UPDATE_INIT_STAT } from '../actions/asset_actions';
import { RECEIVE_TRANSACTION } from '../actions/transactions_actions';
import { CLEAR_STATE } from '../actions/session_actions';

const dataReducer = (state = {}, action) => {

  switch (action.type) {
    
    case RECEIVE_DATA:
      return Object.assign({}, state, { [`${action.sym}${action.tab}`]: action.data, currTab: action.tab });
    case RECEIVE_QUOTE:
      return Object.assign({}, state, { quote: action.data })
    case RECEIVE_INFO:
      return Object.assign({}, state, { info: action.data })
    case RECEIVE_NEWS:
      return Object.assign({}, state, { news: action.data })
    case RECEIVE_EARNINGS:
      return Object.assign({}, state, { earnings: action.data })
    case RECEIVE_TRANSACTION:
      return Object.assign({}, state, { transaction: action.data })
    case UPDATE_INIT_STAT:
      return Object.assign({}, state, { initStat: true })
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default dataReducer;