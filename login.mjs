import { ofetch } from "ofetch";
import { authRoute } from './api.mjs'

export const getToken = async (username, password) => {
  let TOKEN = null;
  if (username && password) {
    try {
      const { apiAccessToken } = await ofetch(authRoute, {
        headers: {
          Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
        },
        method: 'POST',
      });
      TOKEN = apiAccessToken
      console.info('Logged in successfully!, Please save this token in a safe place. You can use it now to get the prayer times 👇');
      console.info('🔑 Token:', '\x1b[32m', TOKEN, '\x1b[0m');
    } catch (error) {
      console.error('Error while trying to log you in.', error);
    }

  } else {
    console.error('Username and password are required to get the token.');
  }

  return TOKEN;
}

export default getToken;
