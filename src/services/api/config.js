/* eslint-disable */
const env = process.env;

const CONFIG = {
  Development: { url: env.REACT_APP_API_URL_DEV },
  Production: { url: env.REACT_APP_API_URL_PRO },
  Localhost: { url: env.REACT_APP_API_URL_LOCAL },
};
// export const API_URL = CONFIG[env.REACT_APP_ENVIROMENT].url;
export const NAME_SERVER = env.REACT_APP_ENVIROMENT;
export const API_URL = `${env.REACT_APP_API_URL}`;
export const API_END_POINT = `${env.REACT_APP_API_URL}`;
export const API_URL_FE = `${env.REACT_APP_URL_FE}`;
