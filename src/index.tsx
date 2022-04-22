import './styles/global.scss';
import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { createStore } from '@store';
import { App } from '@app';
import { Provider } from './provider';

/**
 * History
 */
const history = createBrowserHistory();

/**
 * Store
 */
const store = createStore(history);

/**
 * Render
 */
render(
  <Provider store={store} history={history}>
    <App />
  </Provider>,
  document.getElementById('app')
);
