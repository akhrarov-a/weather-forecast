import React from 'react';
import { Link } from 'react-router-dom';
import { Button, hoc } from '@core';
import { useAuthProps } from './auth.props';
import styles from './auth.scss';

/**
 * <Auth />
 */
const Auth = hoc(useAuthProps, ({ example, pathname, t }) => (
  <div className={styles.auth}>
    <div>{t('wow')}</div>
    <div>{t('auth.kek')}</div>
    <div>{pathname}</div>
    <div>{example}</div>
    <Link to='/profile'>To profile</Link>
    <Button>Cheburek</Button>
  </div>
));

export { Auth };
