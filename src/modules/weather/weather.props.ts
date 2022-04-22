import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { State } from '@store';
import { getWeatherForecastForCurrentUser } from '@weather/store';

/**
 * <Weather /> props
 */
const useWeatherProps = () => {
  const dispatch = useDispatch();

  const { weather } = useSelector((state: State) => state.weather);

  const getWeatherData = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      dispatch(getWeatherForecastForCurrentUser({ latitude, longitude }));
    });
  };

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      if (result.state == 'granted') {
        getWeatherData();
      } else if (result.state == 'prompt') {
        alert(
          'Please give the permission to your location info so we can show you weather forecast in your city'
        );

        getWeatherData();
      } else if (result.state == 'denied') {
        alert(
          "Can't access your location info, please first configure location permission for this website"
        );
      }
    });
  }, []);

  return {
    weather
  };
};

export { useWeatherProps };
