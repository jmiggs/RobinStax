import { RECEIVE_DATA, RECEIVE_QUOTE } from '../actions/asset_actions';

const dataReducer = (state = {}, action) => {

  switch (action.type) {
    
    case RECEIVE_DATA:
      return Object.assign({}, state, { [action.sym]: action.data, currTab: action.tab });
    case RECEIVE_QUOTE:
      return Object.assign({}, state, { [`${sym}quote`]: action.data } )
    default:
      return state;
  }
};

export default dataReducer;