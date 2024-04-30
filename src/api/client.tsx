import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL

export const client = axios.create({
  baseURL,
});

client.interceptors.response.use(response => response.data);

export const setAuthorizationHeader = (token:string) => {
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);
}
