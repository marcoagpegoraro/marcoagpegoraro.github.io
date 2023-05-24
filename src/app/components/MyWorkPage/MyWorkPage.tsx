
import React, { useEffect, useState } from 'react';
import { Avatar, Card, Paper, Typography } from '@mui/material';
import './Styles.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const MyWorkPage = () => {

  const { width, height } = useWindowDimensions();

  return <>
    <div className='my-work-page'>
      <div className='monitor' style={{ backgroundImage: `url('/imac-pro-notes.png')` }}>

        <div className='monitor-screen' style={{ bottom: width < 1034 ? width / 2.65555 - 410 : -22 }}></div>

        {/* <Typography fontSize={'larger'} color={'white'}>
        Sobre meu trabalho
      </Typography>
      <div className='spacer' />


        <Typography fontFamily={'noteworthy'} fontSize={'larger'} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores dignissimos autem temporibus libero obcaecati illum consequuntur porro, atque architecto. Veniam libero cum eius quis ea dolores ratione tenetur beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores dignissimos autem temporibus libero obcaecati illum consequuntur porro, atque architecto. Veniam libero cum eius quis ea dolores ratione tenetur beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores dignissimos autem temporibus libero obcaecati illum consequuntur porro, atque architecto. Veniam libero cum eius quis ea dolores ratione tenetur beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores dignissimos autem temporibus libero obcaecati illum consequuntur porro, atque architecto. Veniam libero cum eius quis ea dolores ratione tenetur beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores dignissimos autem temporibus libero obcaecati illum consequuntur porro, atque architecto. Veniam libero cum eius quis ea dolores ratione tenetur beatae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores dignissimos autem temporibus libero obcaecati illum consequuntur porro, atque architecto. Veniam libero cum eius quis ea dolores ratione tenetur beatae.
        </Typography> */}
      </div>
    </div>
  </>
}