import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { AppBar, Box, Button, Card, CardContent, CardMedia, IconButton, Toolbar, Typography } from '@mui/material';
import { PresentationPage } from './components/PresentationPage/PresentationPage';
import { MyWorkPage } from './components/MyWorkPage/MyWorkPage';
import FloatingScrollPageButton from './components/FloatingScrollPageButton/FloatingScrollPageButton';
import { ResumePage } from './components/ResumePage/ResumePage';

function App() {

  return (
    <div className="App" style={{backgroundImage: 'url("./background image.avif")'}}>
      <NavBar></NavBar>
      <PresentationPage></PresentationPage>
      <ResumePage/>
    </div>
  );
}

export default App;
