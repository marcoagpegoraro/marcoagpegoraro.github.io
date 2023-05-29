
import React from 'react';
import { AppBar, Button, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FlexBreakLine, FlexFillRow } from '../FlexHelpers';
import { useTranslation } from 'react-i18next'

export const NavBar = () => {
  const { i18n } = useTranslation()
  const [webSiteLanguage, setWebSiteLanguage] = React.useState<string | undefined>(i18n.language)

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setWebSiteLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
  }
  
  const selectLanguageInput = (id: string) => {
    return <FormControl id={id} sx={{ m: 1, minWidth: 120 }} size="small">
    <InputLabel id="Language">Language</InputLabel>
    <Select
      labelId="Language"
      id="Language"
      value={webSiteLanguage}
      label="Language"
      onChange={handleLanguageChange}
    >
      <MenuItem value={'en-US'}>🇺🇸 English</MenuItem>
      <MenuItem value={'pt-BR'}>🇧🇷 Português</MenuItem>
      <MenuItem value={'it-IT'}>🇮🇹 Italiano</MenuItem>
    </Select>
  </FormControl>
  }

  return <>
    <header>
      <AppBar className='nav-bar' position="relative" sx={{ bgcolor: "white" }}>
        <Toolbar style={{ flexWrap: 'wrap' }}>
          <Button href='/' style={{ color: '#15141A' }}>
            <Typography fontSize={'large'} fontWeight={'bold'}>
              M&nbsp;P
            </Typography>
          </Button>
          <FlexFillRow />
          {selectLanguageInput("select-mobile-screen")}
          <FlexBreakLine className='break-line-mobile-screen' />

          <section className='social-network-buttons'>

            <IconButton href="https://www.facebook.com/tete5423" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" sx={{ ml: 2 }} style={{ color: '#3b5998' }}>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/marco-antonio-goncalves/" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" style={{ color: '#0e76a8' }}>
              <LinkedInIcon></LinkedInIcon>
            </IconButton>
            <IconButton href="https://www.instagram.com/marcoantonio.png/" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" style={{ color: '#DD2A7B' }}>
              <InstagramIcon></InstagramIcon>
            </IconButton>
            <IconButton href="https://medium.com/@tete5423" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" style={{ color: '#DD2A7B' }}>
              <img style={{
                width: 20,
                height: 20,
                padding: 2,
              }} src='https://miro.medium.com/v2/resize:fill:176:176/1*sHhtYhaCe2Uc3IU0IgKwIQ.png' />
            </IconButton>
            <IconButton href="https://github.com/marcoagpegoraro" target="_blank" rel="noopener noreferrer" size="large" aria-label="menu" sx={{ mr: 2, color: 'black' }}>
              <GitHubIcon/>
            </IconButton>
          </section>
          {selectLanguageInput("select-pc-screen")}
        </Toolbar>
      </AppBar>
    </header>
  </>
}