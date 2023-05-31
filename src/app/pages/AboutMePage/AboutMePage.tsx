
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Translator from '../../components/Translator';
import './styles.css';
import { useInView } from 'react-intersection-observer';

export const AboutMePage = () => {

  const { ref, inView, entry } = useInView({})

  const [isAnimatedAlready, setIsAnimatedAlready] = useState(false)

  if(inView && !isAnimatedAlready){
    setIsAnimatedAlready(true)
  }

  return <>
    <div ref={ref} className={`about-me-page ${isAnimatedAlready ? 'animation-swipe-in-right-to-left' : 'animation-swipe-out-right-to-left'}`}>
      <Typography className='about-me-text' fontSize={'larger'}>
        <Translator path='aboutMe.message1' stringReplaces={[{ stringToReplace: "%%ANOS%%", replaceTo: `${new Date().getFullYear() - 1999}` }]} />
        <br /><br />
        <Translator path='aboutMe.message2' />
        <br /><br />
        <Translator path='aboutMe.message3' />
      </Typography>
      <img className='marco-presenting' src='./marco-presenting.png'></img>
    </div>
    <div className='space-text-next-page'/>
  </>
}