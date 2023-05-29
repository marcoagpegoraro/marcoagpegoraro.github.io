import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { AppBar, Box, Button, Card, CardContent, CardMedia, Fab, IconButton, Toolbar, Typography } from '@mui/material';
import { PresentationPage } from './pages/PresentationPage/PresentationPage';
import { YoutubePage } from './pages/YoutubePage/YoutubePage';
import { ResumePage } from './pages/ResumePage/ResumePage';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { HobbiesPage } from './pages/HobbiesPage/HobbiesPage';
import { AboutMePage } from './pages/AboutMePage/AboutMePage';
import ScrollTop from './components/ScrollTop';

function App() {

  return (
    <div
      className="App"
      style={{
        backgroundColor: '#F2F2F2'
      }}>
      <NavBar></NavBar>
      <PresentationPage/>
      <AboutMePage/>
      <ResumePage />
      <ProjectsPage />
      {/* <HobbiesPage/> */}
      {/* <YoutubePage /> */}
      <ScrollTop/>
    </div>
  );
}

export default App;
