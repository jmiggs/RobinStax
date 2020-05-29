import { RECEIVE_POST_SUCCESS } from "../actions/watchlist_actions";

const UIReducer = (state = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_POST_SUCCESS:
      return Object.assign({}, state, { postWlItemStatus: action.data })
    default:
      return state;
  }
};

export default UIReducer;