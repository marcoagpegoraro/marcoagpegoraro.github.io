import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar';
import { AppBar, Box, Button, Card, CardContent, CardMedia, CssBaseline, Fab, useTheme, ThemeProvider, Toolbar, Typography, createTheme, useMediaQuery } from '@mui/material';
import { PresentationPage } from './pages/PresentationPage/PresentationPage';
import { ResumePage } from './pages/ResumePage/ResumePage';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { AboutMePage } from './pages/AboutMePage/AboutMePage';
import ScrollTop from './components/ScrollTop';
import { themes } from './config/themes';
import { ContactMePage } from './pages/ContactMePage/ContactMePage';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = React.useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light',);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(themes(mode)),
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <NavBar colorModeContext={ColorModeContext} />
          <div className='app-content'>
            <PresentationPage />
            <AboutMePage />
            <ResumePage />
            <ProjectsPage />
            <ContactMePage/>
            <ScrollTop />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
