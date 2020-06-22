import React from 'react';

import Routes from './routes';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
