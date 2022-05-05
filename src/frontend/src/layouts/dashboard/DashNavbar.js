import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

import { alpha } from '@mui/system';
import MobileDrawer from './MobileDrawer';

export default function DashNavbar() {
  return (
    <AppBar
      sx={{
        boxShadow: 0,
        padding: (theme) => theme.spacing(1),
        backgroundImage: 'none',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.72),
      }}
    >
      <Toolbar>
        <MobileDrawer />
      </Toolbar>
    </AppBar>
  );
}
