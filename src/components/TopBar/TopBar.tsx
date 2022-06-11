import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness5RoundedIcon from '@mui/icons-material/Brightness5Rounded';
import { Switch } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { MuiSwitchStyle } from '../../theme';

export const TopBar = () => {

  return (
    <AppBar position="static" sx={{ zIndex: '1600' }}>
      <Container maxWidth={false}>
        <Toolbar  >
          <img
            src="https://i.imgur.com/cHrWogh.png"
            alt='LOGO'
            style={{ height: '50%', width: '180px', marginLeft: '-20px' }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <Tooltip title="Toggle">
              <IconButton sx={{ p: 0, color: 'white' }}>
                <ThemeProvider theme={MuiSwitchStyle}>
                  <Switch />
                </ThemeProvider>
                <Brightness5RoundedIcon sx={{ width: '20px', height: '20px' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Avatar" sx={{ height: '100%' }}>
              <IconButton sx={{ p: 0, color: 'white', paddingLeft: '10px' }}>
                <AccountCircleIcon sx={{ width: '30px', height: '30px' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};