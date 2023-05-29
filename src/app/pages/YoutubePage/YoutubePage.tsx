
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Card, Paper, Typography } from '@mui/material';
import './Styles.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { FlexFillRow } from '../../components/FlexHelpers';

export const YoutubePage = () => {


  return <>
    <div className='youtube-page'>
      <div id="outerdiv">
      {/* <iframe src="https://www.youtube.com/channel/UCSztbXGh4_GVg44TzJ6je_w" id="innerIframe" ></iframe> */}
      <iframe src="https://google.com" id="innerIframe" ></iframe>
      </div>
    </div>
    <iframe src="https://www.youtube.com/embed/?listType=user_uploads&list=tete5423" width="480" height="400"></iframe>
  </>
}