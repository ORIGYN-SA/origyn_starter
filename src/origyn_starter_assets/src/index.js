import React from 'react';
import { createRoot } from 'react-dom/client';
import { SiteProvider } from './context';
import { HashRouter } from 'react-router-dom';

import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SiteProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </SiteProvider>
  </React.StrictMode>
);
