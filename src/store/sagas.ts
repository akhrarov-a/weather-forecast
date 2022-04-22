import { GeneralSaga } from './general';
import { RouterSaga } from './router';
import { WeatherSaga } from '@weather/store';

/**
 * App sagas
 */
const sagas = [new RouterSaga(), new GeneralSaga(), new WeatherSaga()];

export { sagas };
