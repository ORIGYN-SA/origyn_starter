import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { origyn_starter } from '../../../declarations/origyn_starter';
import LogoSquare from '../../assets/logo_square.svg';

function HelloPageView() {
  const [helloWorld, setHelloWorld] = useState('');

  async function callAnotherCanister() {
    setHelloWorld('Query is in progress...');
    let hello = await origyn_starter.sayHiFromAnotherCanister();
    setHelloWorld(hello);
  }
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
      <Typography variant="h4">Make an inter canister call</Typography>
      <Button
        variant="contained"
        color="primary"
        children="call welcome canister"
        onClick={callAnotherCanister}
        sx={{ margin: '2rem 0' }}
      />
      <Typography
        sx={{ margin: '2rem 0' }}
        color="secondary"
        variant="body1"
        children={helloWorld}
      />
    </Box>
  );
}

export default HelloPageView;
