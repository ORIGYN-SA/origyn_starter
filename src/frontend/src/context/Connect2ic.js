import React from 'react';
import { defaultProviders } from '@connect2ic/core';
import { Connect2ICProvider } from '@connect2ic/react';
import { Plug, AstroX } from '@connect2ic/core';
// Styles for the ConnectDialog & Button
// import '@connect2ic/core/style.css';

import { starter } from '../../../declarations/starter';

// const providers = [
//   // Either import them from @connect2ic/core
//   AstroX,
//   Plug,
//   // or create your own (check the existing ones to see how they're implemented)
// ];

const host = window.location.origin;

function ConnectProvider({ children }) {
  return (
    <Connect2ICProvider
      canisters={{
        starter,
      }}
      providers={defaultProviders}
      host={host}
    >
      {children}
    </Connect2ICProvider>
  );
}

export default ConnectProvider;
