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

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const configureStore = (preloadedState = defstate) =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));

export default configureStore;