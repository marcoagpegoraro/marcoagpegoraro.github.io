
import React, { useEffect, useState } from 'react';
import { Avatar, Card, Paper, Typography } from '@mui/material';
import './Styles.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const MyWorkPage = () => {

  const { width, height } = useWindowDimensions();

  const resizeMonitorScreen = () => width < 1034 ? width / 3.2 - 390 : -67.58

  return <>
    <div className='my-work-page'>
      <div className='monitor' style={{ backgroundImage: `url('/imac.png')` }}>
        <div className='monitor-screen' style={{ bottom: resizeMonitorScreen(), backgroundImage: `url('/notes-sem-nada.png')`   }}>

          <div className='app-name'>Meus trabalhos</div>
          <div className='all-notes'></div>
          <div className='tasks'></div>
          <div className='text'></div>
        </div>

      </div>
    </div>
  </>
}