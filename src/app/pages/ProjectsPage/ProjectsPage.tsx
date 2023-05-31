
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import './Styles.css'
import { projects } from './Projects';
import { FlexBreakLine } from '../../components/FlexHelpers';
import Translator from '../../components/Translator';

export const ProjectsPage = () => {


  return <>
    <div className='projects-page'>
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
  </>
}