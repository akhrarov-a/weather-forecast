import { routerReducer } from './router';
import { generalReducer } from './general';
import { weatherReducer } from '@weather/store';

/**
 * App reducers
 */
const reducers = {
  router: routerReducer,
  general: generalReducer,
  weather: weatherReducer
};

export { reducers };
