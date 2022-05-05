import React from 'react';
import ThemeConfig from './theme';
import Router from './routes';
import ConnectProvider from './context/Connect2ic';

function App() {
  return (
    <ThemeConfig>
      <ConnectProvider>
        <Router />
      </ConnectProvider>
    </ThemeConfig>
  );
}

export default App;
