import {getToken, removeToken} from '@/utils/storage';
import Axios, {InternalAxiosRequestConfig} from 'axios';
import useUserStore from '@/stores/userStore';
async function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = await getToken('accessToken');
  if (token) {
    config.headers.authorization = `Bearer ${token.password}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axiosClient = Axios.create({
  baseURL: process.env.VITE_BASE_URL,
});

axiosClient.interceptors.request.use(authRequestInterceptor);
axiosClient.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response.data.code === 'token_not_valid') {
      removeToken('accessToken');
      removeToken('refreshToken');
      useUserStore.getState().setUser(null);
    }
    return Promise.reject(error);
  },
);
