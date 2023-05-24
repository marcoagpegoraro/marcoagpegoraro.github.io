
import React from 'react';
import { Avatar, Typography } from '@mui/material';

export const PresentationPage = () => {
  return <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh)', flexWrap: 'wrap' }}>
      <Typography maxWidth={'50%'} fontSize={'larger'}>
        Hello! My name is Marco, i'm a self taught backend developer currently working with Java, Spring boot, cloud, batch framework and Apache Kafka. I also have experience on Asp.NET tecnologies and front end development with angular and mobile development with Flutter and Ionic.
      </Typography>
      <Avatar

        style={{ marginBottom: -100 }}
        variant="circular"
        alt="Marco Antonio"
        src="./eu.jpg"
        sx={{ width: 300, height: 300 }}
      />
      <div style={{
        flexBasis: '100%',
        height: 0
      }}></div>
      <Typography fontSize={'50px'}>
        💻🎵🚗🎮⌚💾🎹🎸🐈‍⬛🇧🇷🇮🇹
      </Typography>
    </div>
  </>
}