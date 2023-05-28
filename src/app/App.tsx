import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { AppBar, Box, Button, Card, CardContent, CardMedia, IconButton, Toolbar, Typography } from '@mui/material';
import { PresentationPage } from './components/PresentationPage/PresentationPage';
import { MyWorkPage } from './components/MyWorkPage/MyWorkPage';
import { ResumePage } from './components/ResumePage/ResumePage';
import { ProjectsPage } from './components/ProjectsPage/ProjectsPage';

function App() {

  return (
    <div
      className="App"
      style={{
        backgroundColor: '#F2F2F2'
      }}>
      <NavBar></NavBar>
      <PresentationPage></PresentationPage>
      <ResumePage />
      <ProjectsPage />
    </div>
  );
}

export default App;
