
import React from 'react';
import { AppBar, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, ToggleButton, ToggleButtonGroup, Toolbar, Typography, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import Brightness4Icon, { DarkMode, DarkModeOutlined, LightMode, LightModeOutlined } from '@mui/icons-material';
import Brightness7Icon from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FlexBreakLine, FlexFillRow } from './FlexHelpers';
import { useTranslation } from 'react-i18next'
import { Context } from 'react';
import './NavBar.css'
import { SocialNetworkButtons } from './SocialNetworkButtons';

interface props {
  colorModeContext: Context<any>
}

export const NavBar = ({ colorModeContext }: props) => {
  const theme = useTheme();
  const colorMode = React.useContext(colorModeContext);

  const { i18n } = useTranslation()
  const [webSiteLanguage, setWebSiteLanguage] = React.useState<string | undefined>(i18n.language)

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setWebSiteLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  const selectLanguageInput = (className: string) => {
    return <FormControl className={className} sx={{ m: 1, minWidth: 120 }} size="small">
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

  const toggleDarkModeButton = (className: string) => {
    return <Box className={className} sx={{ bgcolor: 'background.default', color: 'text.primary', }}>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
      </IconButton>
    </Box>
  }



  return <>
    <header>
      <AppBar className='nav-bar' position="relative" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar style={{ flexWrap: 'wrap' }}>
          <Button href='/' style={{ color: '#15141A' }}>
            <Typography fontSize={'large'} fontWeight={'bold'} sx={{ color: 'text.primary', }}>
              M&nbsp;P
            </Typography>
          </Button>
          <FlexFillRow />
          {selectLanguageInput("select-mobile-screen")}
          {toggleDarkModeButton("select-mobile-screen")}
          <FlexBreakLine className='break-line-mobile-screen' />
          <section className='social-network-buttons'>
            <SocialNetworkButtons />
          </section>
          {selectLanguageInput("select-pc-screen")}
          {toggleDarkModeButton("select-pc-screen")}
        </Toolbar>
      </AppBar>
    </header>
  </>
}