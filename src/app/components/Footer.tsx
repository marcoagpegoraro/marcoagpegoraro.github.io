
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import { SocialNetworkButtons } from './SocialNetworkButtons';

import './Footer.css'
import Translator from './Translator';
import { Trans, useTranslation } from 'react-i18next';
import babel from '@babel/core';

export const Footer = () => {
  const { t } = useTranslation()
  const parse = require('html-react-parser');

  const theme = useTheme();
  return <>
    <svg style={{ backgroundColor: '#121212' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill={theme.palette.background.default} fill-opacity="1"
       xlinkHref="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,160C672,160,768,160,864,186.7C960,213,1056,267,1152,282.7C1248,299,1344,277,1392,266.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
       d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,160C672,160,768,160,864,186.7C960,213,1056,267,1152,282.7C1248,299,1344,277,1392,266.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    </svg>

    <Box className='footer' component='div'>

      <Typography sx={{ maxWidth: '400px', display: 'block' }} color={'white'} fontSize={12} textAlign={'center'}>
        {parse(t('footer.text'))}
      </Typography>

      <div style={{ marginBottom: '50px', alignSelf: 'center' }}>
        <Typography color={'white'} fontSize={16}>
          <Translator path='footer.followMeOnSocialNetworks' />
        </Typography>
        <SocialNetworkButtons />
      </div>

    </Box>
  </>
}