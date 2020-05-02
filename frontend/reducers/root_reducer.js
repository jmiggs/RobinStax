import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import data from './data_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  data,
  errors,
});

export default rootReducer;

