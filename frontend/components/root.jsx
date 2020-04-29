import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import PreApp from './preapp';

// eslint-disable-next-line react/prop-types
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <PreApp />
    </HashRouter>
  </Provider>
);

export default Root;
