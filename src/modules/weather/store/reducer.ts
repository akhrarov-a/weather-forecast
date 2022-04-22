import { reducer } from 'redux-chill';
import { WeatherState } from './state';
import { getWeatherForecastForCurrentUser } from './actions';
import { WeatherData } from '@api';

/**
 * Weather reducer
 */
const weatherReducer = reducer(new WeatherState())
  .on(getWeatherForecastForCurrentUser.success, (state, payload) => {
    state.weather = payload;
  })
  .on(
    [getWeatherForecastForCurrentUser, getWeatherForecastForCurrentUser.fail],
    state => {
      state.weather = {} as WeatherData;
    }
  );

export { weatherReducer };
