import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchStock, receiveStock } from './util/iex_util'
import * as IEXactionFetch from './actions/asset_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');


  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchStock = fetchStock;
  window.iexfetch = IEXactionFetch.fetchStock
  window.receiveStock = IEXactionFetch.receiveStock

  ReactDOM.render(<Root store={store} />, root);
});
