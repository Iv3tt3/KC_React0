import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import storage from './utils/storage.tsx';
import { setAuthorizationHeader } from './api/client.tsx';
import { AuthContextProvider } from './pages/auth/context.tsx';
import { BrowserRouter } from 'react-router-dom';

const accessToken = storage.get('key');
if (accessToken) {
  setAuthorizationHeader(accessToken);
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider isDefaultLogged={!!accessToken}>
        <App/> 
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
