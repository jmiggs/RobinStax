import { RECEIVE_DATA } from '../actions/asset_actions';

const dataReducer = (state = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_DATA:
      return Object.assign({}, state, { [action.sym]: action.data });
    default:
      return state;
  }
};

export default dataReducer;