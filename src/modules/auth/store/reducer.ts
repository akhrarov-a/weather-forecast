import { reducer } from 'redux-chill';
import { AuthState } from './state';

/**
 * Auth reducer
 */
const authReducer = reducer(new AuthState());

export { authReducer };
