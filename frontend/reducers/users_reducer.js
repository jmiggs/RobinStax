import { RECEIVE_CURRENT_USER, CLEAR_STATE } from '../actions/session_actions';


const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...state, [action.currentUser.id]: action.currentUser };
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default UserReducer;
