import { combineReducers } from "redux";

import userReducer from "./users_reducer";
import assetReducer from './asset_reducer';
import watchlistReducer from './watchlist_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  assets: assetReducer,
  watchlists: watchlistReducer
});

export default entitiesReducer;