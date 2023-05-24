import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { AppBar, Box, Button, Card, CardContent, CardMedia, IconButton, Toolbar, Typography } from '@mui/material';
import { PresentationPage } from './components/PresentationPage/PresentationPage';
import { MyWorkPage } from './components/MyWorkPage/MyWorkPage';
import FloatingScrollPageButton from './components/FloatingScrollPageButton/FloatingScrollPageButton';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <PresentationPage></PresentationPage>
      <MyWorkPage></MyWorkPage>
    </div>
  );
}

export default App;
