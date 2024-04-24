import { client, setAuthorizationHeader } from '../../api/client';
import storage from '../../utils/storage';


interface LoginData {
  email: string;
  password: string;
}

interface TokenData {
  accessToken: string;
}

export const login = (data:LoginData) => {
  return client.post<TokenData, TokenData>('api/auth/login', data)
  .then(data => {
    setAuthorizationHeader(data.accessToken);
    storage.set('auth', data.accessToken);
  });
};
