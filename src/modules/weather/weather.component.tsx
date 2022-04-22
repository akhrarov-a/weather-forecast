import React from 'react';
import { hoc } from '@core';
import moment from 'moment';
import { useWeatherProps } from './weather.props';
import styles from './weather.scss';

/**
 * <Weather />
 */
const Weather = hoc(useWeatherProps, ({ weather }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h2>City name: {weather.name}</h2>
      <p>Temperature: {weather.main?.temp.toFixed(0)} &deg;C</p>
      <p>Feels like: {weather.main?.feels_like.toFixed(0)} &deg;C</p>
      <p>Wind: {weather.wind?.speed.toFixed(0)} m/s</p>
      <p>
        Sunrise:{' '}
        {weather.sys?.sunrise
          ? moment(weather.sys?.sunrise * 1000).format('hh:MM A')
          : ''}
      </p>
      <p>
        Sunset:{' '}
        {weather.sys?.sunrise
          ? moment(weather.sys?.sunset * 1000).format('hh:MM A')
          : ''}
      </p>
      <p>Description: {weather.weather?.[0]?.description}</p>
      <p>Humidity: {weather.main?.humidity} %</p>
    </div>
  </div>
));

export { Weather };
