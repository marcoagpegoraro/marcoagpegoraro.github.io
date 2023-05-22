import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar';
import { AppBar, Box, Button, Card, CardContent, CardMedia, IconButton, Toolbar, Typography } from '@mui/material';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
      </Card>

    </div>
  );
}

export default App;
