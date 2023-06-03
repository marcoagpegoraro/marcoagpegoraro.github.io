
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import './Styles.css'
import { projects } from './Projects';
import { FlexBreakLine } from '../../components/FlexHelpers';
import Translator from '../../components/Translator';
import { useInView } from 'react-intersection-observer';

export const ProjectsPage = () => {
  const [isAnimatedAlready, setIsAnimatedAlready] = useState(false)

  const [ refDivTop, inViewDivTop, entryDivTop ] = useInView({});
  const [ refDivBottom, inViewDivBottom, entryDivBottom ] = useInView({});
  if(inViewDivTop && !isAnimatedAlready){
    setIsAnimatedAlready(true)
  }
  else if(inViewDivBottom && !isAnimatedAlready){
    setIsAnimatedAlready(true)  
  }

  return <>
    <div id="dummy-top-div-just-to-use-as-ref-for-animation" ref={refDivTop} className={isAnimatedAlready ? 'hide-after-animation' : 'show-before-animation'} />
    <div className={`projects-page  ${isAnimatedAlready ? 'animation-swipe-in-bottom-to-top' : 'animation-swipe-out-bottom-to-top'}`}>
      <h1><Translator path={"projects.title"} /></h1>
      <FlexBreakLine />
      {projects.map(project =>
        <Card sx={{ maxWidth: 345, margin: '1%'}} key={project.id} >
          <CardActionArea href={project.link} target='_blank'>
            <CardMedia
              component="img"
              height="200"
              image={project.imageUrl}
              alt={project.id}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Translator path={project.name} />
              </Typography>
              <Typography variant="body2" >
                <Translator path={project.description} />
              </Typography>
              <Typography variant="body2">
                <Translator path={project.date} />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

      )}
    </div>
    <div id="dummy-bottom-div-just-to-use-as-ref-for-animation" ref={refDivBottom} className={isAnimatedAlready ? 'hide-after-animation' : 'show-before-animation'} />
  </>
}