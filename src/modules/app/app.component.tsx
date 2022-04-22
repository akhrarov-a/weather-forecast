import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { register } from '@core';
import styles from './app.scss';

/**
 * Lazy imports
 */
const Weather = register('weather', () => import('@weather'));

/**
 * <App />
 */
const App = () => (
  <div className={styles.app}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/weather' component={Weather} />
        <Redirect to='/weather' />
      </Switch>
    </React.Suspense>
  </div>
);

export { App };
