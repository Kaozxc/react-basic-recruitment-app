import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { FC, ReactElement } from 'react';

type NavigationItemProp = {
  to: string;
  icon: ReactElement<SvgIconComponent>;
  label: string;
};



export const NavigationItem: FC<NavigationItemProp> = ({ to, icon, label }) => {
  const location = useLocation();

  const activeRoute = () => {
    let path = '/' + label.toLowerCase()
    path = path === '/dashboard' ? path = '/' : path;
    return path === location.pathname;
  }
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'black' }} >
      <ListItemButton selected={activeRoute()}  >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItemButton>
    </Link>
  );
};
