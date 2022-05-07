import React from 'react';
import ReactDOM from 'react-dom';
import { SiteProvider } from './context';
import { HashRouter } from 'react-router-dom';
import { defaultProviders } from '@connect2ic/core';
import { Connect2ICProvider } from '@connect2ic/react';
// import '@connect2ic/core/style.css';

import * as starter from '../../declarations/starter';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Connect2ICProvider
      canisters={{
        starter,
      }}
      providers={defaultProviders}
    >
      <SiteProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </SiteProvider>
    </Connect2ICProvider>
  </React.StrictMode>,
  document.getElementById('app')
);
