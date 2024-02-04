import React from 'react';

import { Button, IconButton, Link } from "@mui/material"
import Brightness7Icon from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export const SocialNetworkButtons = () => {
  return <>
    {/* <IconButton href="https://www.facebook.com/tete5423" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" sx={{ ml: 2 }} >
      <FacebookIcon className='social-network-white-background' sx={{ color: "#3b5998", backgroundSize: '15px 17.3px' }}></FacebookIcon>
    </IconButton> */}
    <IconButton href="https://www.linkedin.com/in/marco-antonio-goncalves/" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" >
      <LinkedInIcon className='social-network-white-background' sx={{ color: "#0e76a8" }}></LinkedInIcon>
    </IconButton>
    <IconButton href="https://www.youtube.com/channel/UCSztbXGh4_GVg44TzJ6je_w" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" >
      <YouTubeIcon className='social-network-white-background' sx={{ color: "#FF0000" }} />
    </IconButton> 
    <IconButton href="https://medium.com/@tete5423" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" style={{ color: '#DD2A7B' }}>
      <img style={{ width: 24, height: 24, padding: 2, borderRadius: 7 }}
        src='https://miro.medium.com/v2/resize:fill:176:176/1*sHhtYhaCe2Uc3IU0IgKwIQ.png' />
    </IconButton>
    <IconButton href="https://github.com/marcoagpegoraro" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" sx={{ mr: 2, color: 'text.primary' }}>
      <GitHubIcon className='github-icon' />
    </IconButton>
    <Button variant="outlined" href='https://www.marcoagpegoraro.com.br' target='_blank' endIcon={<Link />}>Blog</Button>
  </>
}