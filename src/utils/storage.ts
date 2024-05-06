import * as Keychain from 'react-native-keychain';

export const setToken = async (
  server: string,
  username: string,
  token: string,
) => {
  try {
    await Keychain.setInternetCredentials(server, username, token);
  } catch (error) {
    console.error('Error saving token', error);
  }
};

export const getToken = async (server: string) => {
  try {
    const credentials = await Keychain.getInternetCredentials(server);
    if (credentials) {
      return credentials;
    }
  } catch (error) {
    console.error('Error retrieving token', error);
  }
  return null;
};

export const removeToken = async (server: string) => {
  try {
    await Keychain.resetInternetCredentials(server);
  } catch (error) {
    console.error('Error removing token', error);
  }
};
