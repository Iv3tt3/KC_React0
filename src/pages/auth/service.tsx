import { client, setAuthorizationHeader } from '../../api/client';
import { LoginData, TokenData } from '../../utils/interfaces';
import storage from '../../utils/storage';




export const login = (data:LoginData) => {
  return client.post<TokenData, TokenData>('api/auth/login', data)
  .then(data => {
    setAuthorizationHeader(data.accessToken);
    storage.set('auth', data.accessToken);
  });
};
