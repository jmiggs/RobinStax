import { combineReducers } from "redux";

import userReducer from "./users_reducer";
import assetReducer from './asset_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  assets: assetReducer,
});

export default entitiesReducer;