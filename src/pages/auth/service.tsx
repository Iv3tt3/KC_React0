import { client, setAuthorizationHeader } from '../../api/client';
import { ILoginData, IToken } from '../../utils/interfaces';
import storage from '../../utils/storage';




export const login = (data:ILoginData) => {
  return client.post<IToken, IToken>('api/auth/login', data)
  .then(data => {
    setAuthorizationHeader(data.accessToken);
    storage.set('key', data.accessToken);
  });
};
