
import React from 'react';
import { Avatar } from '@mui/material';
import Translator from '../../components/Translator';
import '../../../fonts/accidental_presidency/accid___.ttf'
import './styles.css'

export const PresentationPage = () => {
  return <>
    <div className='presentation-page'>
      <Avatar
        variant="circular"
        alt="Marco Antonio"
        src="./logo512.png"
        className='avatar'
      />

      <span style={{ fontFamily: 'accidental_presidency'}}  >
        <h1 className='name'>Marco Pegoraro</h1>
        <h5 className='title'><Translator path='presentation.title'/></h5>
      </span>
    </div>
  </>
}