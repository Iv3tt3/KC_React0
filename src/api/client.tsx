import axios from 'axios';

const baseURL = import.meta.env.REACT_APP_API_BASE_URL as string

export const client = axios.create({
  baseURL,
});

client.interceptors.response.use(response => response.data);

export const setAuthorizationHeader = (token:string) => {
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);
}
