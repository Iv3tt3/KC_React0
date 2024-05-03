//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import storage from './utils/storage.tsx';
import { setAuthorizationHeader } from './api/client.tsx';
import Layout from './componentes/layout/Layout.tsx';

const accessToken = storage.get('key');
if (accessToken) {
  setAuthorizationHeader(accessToken)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <Layout>
    <App isDefaultLogged={!!accessToken} /> 
  </Layout>
  //</React.StrictMode>,
)
