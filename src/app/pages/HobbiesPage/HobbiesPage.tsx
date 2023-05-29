
import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { FlexBreakLine, FlexFillRow } from '../../components/FlexHelpers';
import Translator from '../../components/Translator';
import './styles.css'


export const HobbiesPage = () => {
  return <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh)', flexWrap: 'wrap' }}>

      <div className='cats'>
        <img className='mimo' src='./hobbies-page/mimo.png' />
        <FlexFillRow/>
        <div className='jinx-e-mimi'>
          <img className='jinx' src='./hobbies-page/jinx.png' />
          <img className='mimi' src='./hobbies-page/mimi.png' />
        </div>
      </div>
      <FlexBreakLine/>
      <img className='accord' src='./hobbies-page/accord.png' />

    </div>
  </>
}