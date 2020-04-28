import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";


const defstate = {
    entities: {
        users: {}
      },
      session: {
        id: null,
      },
      errors: {
        session: []
      }
}

const configureStore = (preloadedState = defstate) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;