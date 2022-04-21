import { Saga } from 'redux-chill';
import { login } from './actions';

/**
 * Auth saga
 */
class AuthSaga {
  /**
   * Login
   */
  @Saga(login)
  public *login() {
    console.log('LOGIN SAGA HANDLER');
  }

  /**
   * Test init
   */
  @Saga()
  public *init() {
    console.log('Instant run auth saga');
  }
}

export { AuthSaga };
