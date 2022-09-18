/**
 * File: appconfig.ts
 * 
 * This file ensures that certain environment variables will have default values 
 * if they are not present in a dotenv fil, then exports them alongside 
 * additional variables derived from their values.
*/

// from ENV
export const API_HOSTNAME = '52f1-186-193-121-19.sa.ngrok.io';  /** LAN IP adress of the server. */
export const API_PORT     = '3333';                             /** Port the server is listening for connection on. */

// additional values
export const API_BASE_URL = `${API_HOSTNAME}`;
/** @todo look into using direnv + Babel inline plugin to load variables https://docs.expo.dev/guides/environment-variables/ */
