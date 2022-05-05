import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LogoSquare from '../../assets/logo_square.svg';
import {
  ConnectButton,
  // ConnectDialog,
  // Connect2ICProvider,
  useConnect,
} from '@connect2ic/react';

function HomePageView() {
  const {
    principal,
    connect,
    disconnect,
    isIdle,
    isConnecting,
    isConnected,
    isDisconnecting,
    activeProvider,
  } = useConnect({
    onConnect: () => {
      // Signed in
      alert('hello');
    },
    onDisconnect: () => {
      // Signed out
    },
  });
  console.log('principal', principal);
  return (
    <Box
      margin="6rem 0 0 0"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <img
        src={LogoSquare}
        style={{ height: '20vmin', display: 'block', margin: '2rem 0' }}
        alt="logo"
      />
      <Typography variant="h4" gutterBottom>
        Hello Internet Computer + React + Material UI
      </Typography>
      <Typography variant="h6" gutterBottom style={{ margin: '2rem 0' }}>
        Includes dark theme + 4 IC examples 🚀🚀🚀
      </Typography>
      <ConnectButton />
      <Box>
        <Typography variant="button">
          <Link
            href="https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html"
            target="_blank"
            rel="noopener"
            style={{ padding: '0 1rem' }}
          >
            ic sdk docs
          </Link>

          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener"
            style={{ padding: '0 1rem' }}
          >
            learn react
          </Link>
          <Link
            href="https://material-ui.com/"
            target="_blank"
            rel="noopener"
            style={{ padding: '0 1rem' }}
          >
            material ui
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePageView;
