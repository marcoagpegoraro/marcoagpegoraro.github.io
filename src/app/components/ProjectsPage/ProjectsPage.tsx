
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import './Styles.css'
import { projects } from './Projects';
import { FlexBreakLine } from '../FlexHelpers/FlexHelpers';

export const ProjectsPage = () => {


  return <>
    <div className='projects-page'>
      <h1>Alguns projetos que participei ou criei</h1>
      <FlexBreakLine/>
      {projects.map(project =>
        <Card sx={{ maxWidth: 345, margin: '2%' }} key={project.name} >
          <CardActionArea href={project.link} target='_blank'>
            <CardMedia
              component="img"
              height="200"
              image={project.imageUrl}
              alt={project.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

      )}
    </div>
  </>
}