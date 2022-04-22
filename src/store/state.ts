import { GeneralState } from './general';
import { RouterState } from './router';
import { WeatherState } from '@weather/store';

/**
 * App state
 */
type State = {
  general: GeneralState;
  router: RouterState;
  weather: WeatherState;
};

export { State };
