import React from 'react';
import { Box, Drawer, AppBar, Toolbar, Divider } from '@mui/material';
import OrigynLogo from '../../components/Logo/OrigynLogo';
import { alpha } from '@mui/system';
import MenuList from '../../components/menu';
import {
  ConnectButton,
  // ConnectDialog,
  // Connect2ICProvider,
  // useConnect,
} from '@connect2ic/react';

export default function DashSidebar() {
  // const { siteData } = useSiteData();
  // console.log('site data', siteData, tables)

  return (
    <Box width="320px" bgcolor="red">
      <AppBar
        sx={{
          width: 'calc(100% - 320px)',
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
          <Box sx={{ marginLeft: 'auto' }}>
            <ConnectButton />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={true}>
        <Box width="320px">
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem 2rem',
            }}
          >
            <Box sx={{ padding: '8px' }}>
              <OrigynLogo />
            </Box>
          </Box>
          <Divider />
          <MenuList />
        </Box>
      </Drawer>
    </Box>
  );
}
