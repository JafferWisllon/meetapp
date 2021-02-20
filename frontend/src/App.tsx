import 'react-toastify/dist/ReactToastify.css';
import './interceptors/request';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

import GlobalStyle from './styles/global';
import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
          <ToastContainer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
