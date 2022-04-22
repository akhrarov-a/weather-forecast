/**
 * Build enviroment
 */
const enviroment = {
  stage: process.env.stage,
  development: process.env.NODE_ENV != 'production',
  weatherAPIKey: 'f3dc09a6463a723d87ef3c35d78b46ce',
  apiUrl: 'https://api.openweathermap.org/data/2.5',
  iconUrl: 'https://openweathermap.org/img/w'
};

export { enviroment };
