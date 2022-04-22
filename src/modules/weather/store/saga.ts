import { StoreContext } from '@store/context';
import { Payload, Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { getWeatherForecastForCurrentUser } from './actions';

/**
 * Weather saga
 */
class WeatherSaga {
  /**
   * Get weather forecast for current user
   */
  @Saga(getWeatherForecastForCurrentUser)
  public *getWeatherForecastForCurrentUser(
    { latitude, longitude }: Payload<typeof getWeatherForecastForCurrentUser>,
    { weather }: StoreContext
  ) {
    try {
      const response = yield call(weather.getWeatherForecastForCurrentUser, {
        latitude,
        longitude
      });

      yield put(getWeatherForecastForCurrentUser.success(response.data));
    } catch (error) {
      alert(error.message);
    }
  }
}

export { WeatherSaga };
