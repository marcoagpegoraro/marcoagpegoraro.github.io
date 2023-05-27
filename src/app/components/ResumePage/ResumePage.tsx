
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

export const ResumePage = () => {
  const fireworksRef = useRef<FireworksHandlers>(null)

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [displayFireworksEasterEgg, setDisplayFireworksEasterEgg] = useState('none');
  

  const toggleFireworksEasterEgg = async () => {
    if (!fireworksRef.current) return

    fireworksRef.current.start()
    setDisplayFireworksEasterEgg('block')
    await Timeout.set(5000);
    fireworksRef.current.stop()
    setDisplayFireworksEasterEgg('none')
  }

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    console.log(selectedIndex)
  }

  return <>
    <div className='resume-page'>
      <div className='monitor'>
        <div className='window'>
          <div className='titlebar'>
            <Typography marginLeft={1} color={'white'} fontSize={26} fontFamily={'MS Sans Serif'}>Sobre mim</Typography>
            <div style={{ flex: 1 }}></div>
            <Box onClick={() => toggleFireworksEasterEgg()} width={30} height={30} style={{ backgroundColor: '#C2C6CA', marginRight: 4, marginTop: 4, cursor: 'pointer' }}><HorizontalRuleIcon style={{ 'fontSize': '1.5rem', marginTop: 10 }} /></Box>
            <Box onClick={() => toggleFireworksEasterEgg()} width={30} height={30} style={{ backgroundColor: '#C2C6CA', marginRight: 4, marginTop: 4, cursor: 'pointer' }}><CheckBoxOutlineBlankIcon style={{ 'fontSize': '1.5rem', marginTop: 3 }} /></Box>
            <Box onClick={() => toggleFireworksEasterEgg()} width={30} height={30} style={{ backgroundColor: '#C64830', marginRight: 4, marginTop: 4, cursor: 'pointer' }}><CloseIcon style={{ 'fontSize': '1.5rem', marginTop: 3 }} /></Box>
          </div>
          <div style={{ flexBasis: '100%', height: 0 }}></div>
          
          <Box sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper' }}>
            <nav aria-label="lista de experiencias profissionais">
              <List
                subheader={
                  <ListSubheader component="div" id="lista-experiencias-profissionais">
                    Minhas experiencias profissionais
                  </ListSubheader>
                }>

                {resumeItemList.filter(resumeItem => resumeItem.type == ResumeItemType.WORK).map(resumeItem => <>
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
                </>)}
              </List>
            </nav>
            <Divider />
            <nav aria-label="Lista de estudos">
              <List
                subheader={
                  <ListSubheader component="div" id="estudos-lista">
                    Meus estudos
                  </ListSubheader>
                }
              >

                {resumeItemList.filter(resumeItem => resumeItem.type == ResumeItemType.STUDY).map(resumeItem => <>
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
                </>)}
              </List>
            </nav>
          </Box>
          <Box sx={{ width: 'calc(100% - 260px)', bgcolor: 'background.paper', backgroundImage: 'url("https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg?w=2000")' }}>
            {resumeItemList.filter(resumeItem => resumeItem.selectedIndex == selectedIndex).map(resumeItem => <>
            <Typography key={resumeItem.selectedIndex}>
              {resumeItem.aboutText}
            </Typography>
            </>)}
          </Box>
        </div>
      </div>
    </div>
    <Fireworks
        ref={fireworksRef}
        options={{ opacity: 0.5 }}
        style={{
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