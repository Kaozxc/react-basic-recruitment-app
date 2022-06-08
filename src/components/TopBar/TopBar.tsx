import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

export const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box
            component="img"
            src="https://i.imgur.com/cHrWogh.png"
            sx={{ height: "100%", width: "150px" }}
          />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'main',
              textDecoration: 'none',
            }}
          >
            IMG ARENA
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            IMG ARENA
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Toggle">
              <IconButton sx={{ p: 0, color: 'white' }}>
                <ToggleOffIcon sx={{ width: '40px', height: '40px' }} />
              </IconButton>

            </Tooltip>
            <Tooltip title="Settings">
              <IconButton sx={{ p: 0, color: 'white' }}>
                <SettingsIcon sx={{ width: '40px', height: '40px' }} />
              </IconButton>

            </Tooltip>

            <Tooltip title="Avatar">
              <IconButton sx={{ p: 0, color: 'white', paddingLeft: '20px' }}>
                <AccountCircleIcon sx={{ width: '40px', height: '40px' }} />
              </IconButton>

            </Tooltip>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};