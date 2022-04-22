import { AxiosRequestConfig } from 'axios';
import { enviroment } from '@env';
import { Location } from '@api';

/**
 * Weather service
 */
class WeatherService {
  /**
   * Get axios
   */
  public constructor(
    private create: (
      config: AxiosRequestConfig
    ) => (
      config: AxiosRequestConfig,
      enabled?: boolean,
      disabledToken?: boolean
    ) => any
  ) {}

  /**
   * Api
   */
  public api = this.create({
    baseURL: enviroment.apiUrl
  });

  /**
   * Get weather forecast for current user
   */
  public getWeatherForecastForCurrentUser = ({
    latitude,
    longitude
  }: Location) =>
    this.api({
      method: 'GET',
      url: `/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${enviroment.weatherAPIKey}`
    });
}

export { WeatherService };
