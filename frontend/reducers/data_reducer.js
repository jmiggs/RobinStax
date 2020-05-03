import { RECEIVE_DATA, RECEIVE_QUOTE, RECEIVE_INFO, RECEIVE_NEWS, RECEIVE_EARNINGS } from '../actions/asset_actions';

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
    default:
      return state;
  }
};

export default dataReducer;