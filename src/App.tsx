import React from 'react';

import Routes from './routes';
import { AuthProvider } from './hooks/authContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
