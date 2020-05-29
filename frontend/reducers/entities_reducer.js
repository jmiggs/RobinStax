import { combineReducers } from "redux";

import userReducer from "./users_reducer";
import assetReducer from './asset_reducer';
import watchlistReducer from './watchlist_reducer';
import UIReducer from './ui_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  assets: assetReducer,
  watchlists: watchlistReducer,
  UI: UIReducer
});

export default entitiesReducer;