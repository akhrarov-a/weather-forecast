import { make } from 'redux-chill';
import { Location, WeatherData } from '@api';

/**
 * Get weather forecast for current user
 */
const getWeatherForecastForCurrentUser = make(
  '[weather] get weather forecast for current user'
)
  .stage((location: Location) => location)
  .stage('success', (data: WeatherData) => data)
  .stage('fail');

export { getWeatherForecastForCurrentUser };
