import React, { useState } from 'react';
import './App.css'
import { Grid, PaletteMode, ThemeProvider } from '@mui/material';
import { TopBar } from './components/TopBar/TopBar';
import { LeftNavigation } from './components/LeftNavigation/LeftNavigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { darkTheme, lightTheme } from './theme';
import { Error404 } from './screens/404';
import { navigationRoutes } from './navigationRoutes';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = (value: boolean) => {
    if (value === true) {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar toggleTheme={toggleTheme} />
        <Grid container sx={{ position: 'absolute' }} >
          <Grid item sx={{ height: '93.4vh', width: 290, boxShadow: '3' }}>
            <LeftNavigation />
          </Grid>
          <Grid item xl >
            <Routes>
              {Object.values(navigationRoutes).map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
              <Route path={'*'} element={<Error404 />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
