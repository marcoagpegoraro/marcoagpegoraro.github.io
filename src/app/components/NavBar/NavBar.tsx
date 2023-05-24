
import React from 'react';
import './NavBar.css'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


export const NavBar = () => {
  return <>
    <header >
      <AppBar position="relative" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Button href='/' style={{ color: '#15141A' }}>
            <HomeIcon></HomeIcon>
            <Typography fontSize={'large'} fontWeight={'bold'}>
              &nbsp;Marco Pegoraro
            </Typography>
          </Button>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton href="https://www.facebook.com/tete5423" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" style={{ color: '#3b5998' }}>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/marco-antonio-goncalves/" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" style={{ color: '#0e76a8' }}>
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
          <IconButton href="https://www.instagram.com/marcoantonio.png/" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" sx={{ mr: 2 }} style={{ color: '#DD2A7B' }}>
            <InstagramIcon></InstagramIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  </>
}