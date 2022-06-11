import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link, useLocation } from 'react-router-dom';
import { NavigationItem } from './NavigationItem';

const drawerWidth = 290;

export function LeftNavigation() {

  const menuStyle = {
    '&& .Mui-selected': {
      bgcolor: '#ffede6',
      '&, & .MuiListItemIcon-root': {
        color: '#ff3f00',
      },
    },
    paddingTop: '10px', marginLeft: '15px',
    justifyContent: "center", display: 'flex', flexWrap: 'nowrap', flexDirection: "column"
  }


  const drawer = (
    <div style={{ width: '100%' }}>
      <Toolbar />
      <List sx={menuStyle}>
        <Box sx={{ marginLeft: '20px', color: '#a0a0a0' }}>{'Management'}</Box>
        {/* // Dashboard */}
        <NavigationItem to={'/'} icon={<HomeIcon />} label={'Dashboard'} />
        {/* Sports and Competitions */}
        {['Sports', 'Competitions'].map((text, index) => (
          <NavigationItem to={'/' + text.toLowerCase()} icon={text === 'Sports' ? <SportsSoccerIcon /> : <EmojiEventsIcon />} label={text} key={index} />
        ))}
      </List>
      <Divider />
      <List sx={menuStyle} >
        <Box sx={{ marginLeft: '20px', color: '#a0a0a0' }}>{'Planning'}</Box>
        {/* Scheduling and Organisations */}
        {['Scheduling', 'Organisations'].map((text, index) => (
          <NavigationItem to={'/' + text.toLowerCase()} icon={text === 'Scheduling' ? <FactCheckIcon /> : <CorporateFareIcon />} label={text} key={index} />
        ))}
      </List>
      <Divider />
      <List sx={menuStyle} >
        <Box sx={{ marginLeft: '20px', color: '#a0a0a0' }}>{'People'}</Box>
        {/* Users */}
        <NavigationItem to={'/users'} icon={<SupervisedUserCircleIcon />} label={'Users'} />
      </List>
    </div>
  );

  return (
    <Box>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant='permanent'
          anchor='left'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: '100%', position: 'absolute' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
