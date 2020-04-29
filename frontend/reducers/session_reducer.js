
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

// eslint-disable-next-line no-underscore-dangle
const _null = Object.freeze({
  id: null,
});

const sessionReducer = (state = _null, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _null;

    default:
      return state;
  }
};

export default sessionReducer;
