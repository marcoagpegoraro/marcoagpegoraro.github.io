
import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { FlexBreakLine, FlexFillRow } from '../../components/FlexHelpers';
import Translator from '../../components/Translator';
import './styles.css'

export const AboutMePage = () => {
  return <>
    <div style={{
       display: 'flex', 
       alignItems: 'center', 
       justifyContent: 'space-around', 
       flexDirection: 'row', 
       flexWrap: 'wrap' }}>
      <Typography maxWidth={'70%'} fontSize={'larger'}>
        <Translator path='home.message1' stringReplaces={[{ stringToReplace: "%%ANOS%%", replaceTo: `${new Date().getFullYear() - 1999}` }]} />
        <br /><br />
        <Translator path='home.message2' />
        <br /><br />
        <Translator path='home.message3' />
      </Typography>
      <img className='marco-presenting' src='./marco-presenting.png'></img>
    </div>
  </>
}