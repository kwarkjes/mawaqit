import { ofetch } from "ofetch";
export const apiBase = 'https://mawaqit.net/api/2.0';
export const authRoute = `${apiBase}/me`;


export const getToken = async (username = '', password = '') => {
  let token = null;
  try {
    const { apiAccessToken } = await ofetch(authRoute, {
      headers: { Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`},
      method: 'POST',
    });
    token = apiAccessToken
    console.info('Logged in successfully!, Please save this token in a safe place. You can use it now to get the prayer times 👇');
    console.info('🔑 Token:', '\x1b[32m', token, '\x1b[0m');
  } catch (error) {
    console.error('Error while trying to log you in.', error);
  }

  return token;
}

export class Client {
  constructor(token) {
    this.token = token;
  }

  login = async (username, password) => {
    this.token = await getToken(username, password);
    return this.token;
  }

  getPrayerTimeByMosqueUUID = (uuid) => fetchData(`${apiBase}/mosque/${uuid}/prayer-times`, this.token);
  getWeatherByMosqueUUID = (uuid) => fetchData(`${apiBase}/mosque/${uuid}/weather`, this.token);
  getMosquesByCoordinates = ({ lat, lon }) => fetchData(`${apiBase}/mosque/search?lat=${lat}&lon=${lon}`, this.token);
  getMosquesByCountryCode = (country) => fetchData(`${apiBase}/mosque/map/${country}`, this.token);
}


const fetchData = async (url, token) => {
  const response = await ofetch(url, {
    headers: {
      'Api-Access-Token': token,
      'Content-Type': 'application/json',
    },
  });

  return response
}

export default Client;