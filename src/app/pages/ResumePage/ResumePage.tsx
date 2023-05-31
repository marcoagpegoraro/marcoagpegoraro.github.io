
import React, { useEffect, useRef, useState } from 'react';
import { Box, ListSubheader, Typography } from '@mui/material';
import './Styles.css'
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ResumeItem, { ResumeItemType } from './types/Resume';
import { resumeItemList } from './ResumeItems';
import type { FireworksHandlers } from '@fireworks-js/react'
import { Fireworks } from '@fireworks-js/react'
import Timeout from 'await-timeout';
import { FlexBreakLine, FlexFillRow } from '../../components/FlexHelpers';
import Translator from '../../components/Translator';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer';

export const ResumePage = () => {
  const fireworksRef = useRef<FireworksHandlers>(null)

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [displayFireworksEasterEgg, setDisplayFireworksEasterEgg] = useState('none');

  const { t } = useTranslation()


  const activeFireworksEasterEgg = async () => {
    if (!fireworksRef.current) return

    fireworksRef.current.start()
    setDisplayFireworksEasterEgg('block')
    await Timeout.set(5000);
    disableFireworksEasterEgg()
  }

  const disableFireworksEasterEgg = async () => {
    fireworksRef?.current?.stop()
    setDisplayFireworksEasterEgg('none')
  }

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
  }


  const { ref, inView, entry } = useInView({});

  const [isAnimatedAlready, setIsAnimatedAlready] = useState(false)

  if(inView && !isAnimatedAlready){
    setIsAnimatedAlready(true)
  }

  return <>
    <div ref={ref}  className={`resume-page`}>
      <div className={`monitor  ${isAnimatedAlready ? 'animation-swipe-in-left-to-right' : 'animation-swipe-out-left-to-right'}`}>
        <div className='window'>
          <div className='titlebar'>
            <Typography marginLeft={1} color={'white'} fontSize={26}>
              <Translator path='resume.windowText'></Translator>
            </Typography>
            <FlexFillRow />
            <Box onClick={() => activeFireworksEasterEgg()} width={30} height={30} style={{ backgroundColor: '#C2C6CA', marginRight: 4, marginTop: 4, cursor: 'pointer' }}><HorizontalRuleIcon style={{ 'fontSize': '1.5rem', marginTop: 10, color: 'black'  }} /></Box>
            <Box onClick={() => activeFireworksEasterEgg()} width={30} height={30} style={{ backgroundColor: '#C2C6CA', marginRight: 4, marginTop: 4, cursor: 'pointer' }}><CheckBoxOutlineBlankIcon style={{ 'fontSize': '1.5rem', marginTop: 3, color: 'black'  }} /></Box>
            <Box onClick={() => activeFireworksEasterEgg()} width={30} height={30} style={{ backgroundColor: '#C64830', marginRight: 4, marginTop: 4, cursor: 'pointer' }}><CloseIcon style={{ 'fontSize': '1.5rem', marginTop: 3, color: 'black'  }} /></Box>
          </div>
          <div className='second-titlebar'>
            <Typography sx={{ margin: '6px 4px 0 8px', color: 'black' }}>Escolher Outra empresa:</Typography>
            <select style={{ backgroundColor: '#008080', cursor: 'pointer', border: 'none', textAlign: 'center', fontWeight: 'bold', marginTop: 4,height: '30px' }} onChange={(event) => setSelectedIndex(+(event.target.value))} value={selectedIndex}>
              {resumeItemList.map(resumeItem =>
                <option key={resumeItem.name} value={resumeItem.selectedIndex}>{resumeItem.name}</option>
              )}
            </select>
          </div>
          <FlexBreakLine />
          <Box className='lista-botoes' sx={{ bgcolor: 'background.paper' }}>
            <nav aria-label="lista de experiencias profissionais">
              <List
                subheader={
                  <ListSubheader component="div" id="lista-experiencias-profissionais">
                    <Translator path='resume.myProfessionalExperiences'></Translator>
                  </ListSubheader>
                }>

                {resumeItemList.filter(resumeItem => resumeItem.type === ResumeItemType.WORK).map(resumeItem =>
                  <ListItem disablePadding key={resumeItem.selectedIndex}>
                    <ListItemButton
                      selected={selectedIndex === resumeItem.selectedIndex}
                      onClick={(event) => handleListItemClick(event, resumeItem.selectedIndex)}>
                      <ListItemIcon>
                        {resumeItem.icon}
                      </ListItemIcon>
                      <ListItemText primary={resumeItem.name} />
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            </nav>
            <Divider />
            <nav aria-label="Lista de estudos">
              <List
                subheader={
                  <ListSubheader component="div" id="estudos-lista">
                    <Translator path='resume.myEducation'></Translator>
                  </ListSubheader>
                }
              >

                {resumeItemList.filter(resumeItem => resumeItem.type === ResumeItemType.STUDY).map(resumeItem =>
                  <ListItem disablePadding key={resumeItem.selectedIndex}>
                    <ListItemButton
                      selected={selectedIndex === resumeItem.selectedIndex}
                      onClick={(event) => handleListItemClick(event, resumeItem.selectedIndex)}>
                      <ListItemIcon>
                        {resumeItem.icon}
                      </ListItemIcon>
                      <ListItemText primary={resumeItem.name} />
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            </nav>
          </Box>
          <Box className='content' sx={{ bgcolor: 'background.paper' }}>
            {resumeItemList.filter(resumeItem => resumeItem.selectedIndex === selectedIndex).map(resumeItem =>
              <section className='inner-content' key={resumeItem.selectedIndex} >
                <img className='resume-logo' src={resumeItem.imageUrl} />
                {resumeItem.chips ? <><br /><br /></> : ''}
                {resumeItem.chips?.map((chip, index) => <span key={index}>{chip}</span>)}
                <br /><br />
                <Translator path={resumeItem.date}/>
                <br /><br />
                {resumeItem.aboutText.map((paragraph, index) => <span key={index}><Translator path={paragraph}/><br/><br/></span>)}
              </section>
            )}
          </Box>
        </div>
      </div>
    </div>
    <Fireworks
      ref={fireworksRef}
      options={{ opacity: 0.5 }}
      onClick={() => disableFireworksEasterEgg()}
      style={{
        zIndex: 999,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: displayFireworksEasterEgg
      }}
    />
  </>
}