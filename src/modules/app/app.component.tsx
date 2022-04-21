import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { register } from '@core';
import { AppProps } from './app.props';
import styles from './app.scss';

/**
 * Lazy imports
 */
const Auth = register('auth', () => import('@auth'));

/**
 * <App />
 */
const App: FC<AppProps> = ({}) => (
  <div className={styles.app}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/auth' component={Auth} />
      </Switch>
    </React.Suspense>
  </div>
);

export { App };
