import 'react-toastify/dist/ReactToastify.css';
import './interceptors/request';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
