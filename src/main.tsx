//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import storage from './utils/storage.tsx';
import { setAuthorizationHeader } from './api/client.tsx';
import { AuthContextProvider } from './pages/auth/context.tsx';

const accessToken = storage.get('key');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <AuthContextProvider isDefaultLogged={!!accessToken}>
      <App/> 
    </AuthContextProvider>
  //</React.StrictMode>,
)
