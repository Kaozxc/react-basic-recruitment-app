// import { Divider } from "@mui/material";
// import { Link } from "react-router-dom";
// import { navigationRoutes } from "../../navigationRoutes";
// /*
//   icons can be found in here: https://mui.com/material-ui/material-icons/
//  */
// export const LeftNavigation = () => {
//   return (
//     <>
//       <p>Management</p>
//       <Link to={navigationRoutes.dashboard.path}>Dashboard</Link>
//       <Link to={"/sports"}>Sports</Link>
//       <Link to={"/competitions"}>Competitions</Link>
//       <Divider />
//       <p>Planning</p>
//       <Link to={"/scheduling"}>Scheduling</Link>
//       <Link to={"/organisations"}>Organisations</Link>
//       <Divider />
//       <p>People</p>
//       <Link to={"/scheduling"}>Scheduling</Link>
//       <Link to={"/organisations"}>Organisations</Link>
//     </>
//   );
// };

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link, useLocation } from 'react-router-dom';
import { navigationRoutes } from '../../navigationRoutes';

const drawerWidth = 290;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export function LeftNavigation(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const location = useLocation();

  const activeRoute = (routeName: any) => {
    if (routeName === 'Dashboard') routeName = '';
    const check = '/' + routeName === location.pathname;
    //return 0 > -1 ? true : false;
    console.log('check', check)
    console.log('routename', routeName)
    console.log('location', location.pathname)
    return check;
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const activeList = {
    backgroundColor: '#ff3f00'
  }

  const drawer = (
    <div>
      <Toolbar />
      <List sx={{
        // selected and (selected + hover) states
        '&& .Mui-selected, && .Mui-selected:hover': {
          bgcolor: '#ffede6',
          '&, & .MuiListItemIcon-root': {
            color: '#ff3f00',
          },
        },
        paddingTop: '50px', marginLeft: '15px',
        justifyContent: "center", display: 'flex', flexWrap: 'nowrap', flexDirection: "column"
      }} >
        <Box sx={{ marginLeft: '20px', color: '#a0a0a0' }}>{'Management'}</Box>
        {['Dashboard', 'Sports'].map((text, index) => (
          <Link to={text === 'Dashboard' ? '/' : text} style={{ textDecoration: 'none', color: 'black' }} key={index}>
            <ListItem key={text} disablePadding disableGutters={true} selected={activeRoute(text)}>
              <ListItemButton>
                <ListItemIcon>
                  {
                    index % 2 === 0 ? <HomeIcon /> : <SportsSoccerIcon />
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        {['Competitions'].map((text, index) => (
          <Link to={text} style={{ textDecoration: 'none', color: 'black' }} key={index}>
            <ListItem key={text} disablePadding disableGutters={true} selected={activeRoute(text)} sx={{}}>
              <ListItemButton>
                <ListItemIcon>
                  <EmojiEventsIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List sx={{
        paddingTop: '10px', marginLeft: '15px',
        justifyContent: "center", display: 'flex', flexWrap: 'nowrap', flexDirection: "column"
      }} >
        <Box sx={{ marginLeft: '20px', color: '#a0a0a0' }}>{'Planning'}</Box>
        {['Scheduling', 'Organisations'].map((text, index) => (
          <Link to={text} style={{ textDecoration: 'none', color: 'black' }} key={index}>
            <ListItem key={text} disablePadding selected={activeRoute(text)}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <FactCheckIcon /> : <CorporateFareIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List sx={{
        paddingTop: '10px', marginLeft: '15px',
        justifyContent: "center", display: 'flex', flexWrap: 'nowrap', flexDirection: "column"
      }} >
        <Box sx={{ marginLeft: '20px', color: '#a0a0a0' }}>{'People'}</Box>
        {['Users'].map((text, index) => (
          <Link to={text} style={{ textDecoration: 'none', color: 'black' }} key={index}>
            <ListItem key={text} disablePadding selected={activeRoute(text)}>
              <ListItemButton>
                <ListItemIcon>
                  <SupervisedUserCircleIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, zIndex: '-2' }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box> */}
    </Box>
  );
}
