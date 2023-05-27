
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Card, Paper, Typography } from '@mui/material';
import './Styles.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export const MyWorkPage = () => {

  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return <>
    <div className='my-work-page'>
      <div className='monitor' style={{ backgroundImage: `url('/imac.png')` }}>
        <div className='slide'>
          <div className='titlebar'>
            <Typography marginLeft={1} color={'white'} fontSize={15} fontFamily={'MS Sans Serif'}>Sobre mim</Typography>
            <div style={{flex: 1}}></div>
            <Box width={16} height={16} style={{backgroundColor: '#C2C6CA', marginRight: 2, marginTop: 1}}><HorizontalRuleIcon style={{'fontSize': '1rem', marginTop: 5}}/></Box>
            <Box width={16} height={16} style={{backgroundColor: '#C2C6CA', marginRight: 2, marginTop: 1}}><CheckBoxOutlineBlankIcon style={{'fontSize': '1rem'}}/></Box>
            <Box width={16} height={16} style={{backgroundColor: '#C64830', marginRight: 1, marginTop: 1}}><CloseIcon style={{'fontSize': '1rem'}}/></Box>
          </div>
          <Carousel>
            <div>
              <img src={images[0]} />
              aaa
              {/* <p className="legend">AAAAA</p> */}
            </div>
            <div>
              <img src={images[1]} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={images[2]} />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </>
}