
import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { FlexBreakLine } from '../FlexHelpers/FlexHelpers';
import Translator from '../Translator';

export const PresentationPage = () => {
  return <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh)', flexWrap: 'wrap' }}>
      <Typography maxWidth={'50%'} fontSize={'larger'}>
        <Translator path='home.message'/>
      </Typography>
      <Avatar

        style={{ marginBottom: -100 }}
        variant="circular"
        alt="Marco Antonio"
        src="./eu.jpg"
        sx={{ width: 300, height: 300 }}
      />
      <FlexBreakLine/>
      <Typography fontSize={'50px'}>
        💻🎵🚗🎮⌚💾🎹🎸🐈‍⬛🇧🇷🇮🇹
      </Typography>
    </div>
  </>
}