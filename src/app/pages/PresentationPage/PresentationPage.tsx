
import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { FlexBreakLine, FlexFillRow } from '../../components/FlexHelpers';
import Translator from '../../components/Translator';
import '../../../fonts/accidental_presidency/accid___.ttf'
import './styles.css'

export const PresentationPage = () => {
  return <>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      height: 'calc(100vh)',
      flexWrap: 'wrap'
    }}>
      <Avatar

        variant="circular"
        alt="Marco Antonio"
        src="./eu.jpg"
        sx={{ width: 300, height: 300, mt: 10 }}
      />

      <span style={{maxWidth: '50%',textOverflow: 'clip', fontFamily: 'accidental_presidency'}}  >
        <h1 className='name'>Marco Pegoraro</h1>
        <h5 className='title'><Translator path='presentation.title'/></h5>
      </span>
    </div>
  </>
}