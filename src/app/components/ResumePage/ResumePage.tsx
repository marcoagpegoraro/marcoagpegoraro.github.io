
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Card, ListSubheader, Paper, Typography } from '@mui/material';
import './Styles.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { AccountBalance, Computer, Money, School, SchoolOutlined, StorefrontOutlined, TipsAndUpdates } from '@mui/icons-material';
import ResumeItem, { ResumeItemType } from './types/Resume';
import { resumeItemList } from './ResumeItems';

export const ResumePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);


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
            <Typography marginLeft={1} color={'white'} fontSize={20} fontFamily={'MS Sans Serif'}>Sobre mim</Typography>
            <div style={{ flex: 1 }}></div>
            <Box width={30} height={30} style={{ backgroundColor: '#C2C6CA', marginRight: 4, marginTop: 4 }}><HorizontalRuleIcon style={{ 'fontSize': '1.5rem', marginTop: 10 }} /></Box>
            <Box width={30} height={30} style={{ backgroundColor: '#C2C6CA', marginRight: 4, marginTop: 4 }}><CheckBoxOutlineBlankIcon style={{ 'fontSize': '1.5rem', marginTop: 3 }} /></Box>
            <Box width={30} height={30} style={{ backgroundColor: '#C64830', marginRight: 4, marginTop: 4 }}><CloseIcon style={{ 'fontSize': '1.5rem', marginTop: 3 }} /></Box>
          </div>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
        </div>
      </div>
    </div>
  </>
}