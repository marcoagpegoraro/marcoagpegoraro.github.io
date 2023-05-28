
import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { FlexBreakLine } from '../FlexHelpers/FlexHelpers';
import Translator from '../Translator';

export const PresentationPage = () => {
  return <>
    <div style={{ display: 'flex', alignItems: 'center',  justifyContent: 'space-around', flexDirection: 'row', height: 'calc(100vh)', flexWrap: 'wrap' }}>
    <Avatar
        style={{ marginBottom: -100 }}
        variant="circular"
        alt="Marco Antonio"
        src="./eu.jpg"
        sx={{ width: 300, height: 300 }}
      />

      <Typography maxWidth={'50%'} fontSize={'larger'}>
        <Translator path='home.message1' stringReplaces={[{ stringToReplace: "%%ANOS%%", replaceTo: `${new Date().getFullYear() - 1999}` }]} />
        <br/><br/>
        <Translator path='home.message2' />
        <br/><br/>
        <Translator path='home.message3' />
      </Typography>
    </div>
  </>
}