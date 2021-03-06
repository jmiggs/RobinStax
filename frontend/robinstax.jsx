import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchStockQuote, receiveStock } from './util/iex_util'
import { TestThunk } from './actions/asset_actions';
import { fetchTransactions } from './util/transaction_util'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');


  let store;
  if (window.currentUser) {
    const preloadedState = {
      data: {
        currTab: '5D'
      },
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
  window.fetchTransactions = fetchTransactions;


  // window.receiveStock = IEXactionFetch.receiveStock // action 

  ReactDOM.render(<Root store={store} />, root);
});
