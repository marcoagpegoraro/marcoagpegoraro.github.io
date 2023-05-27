
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import './Styles.css'
import { projects } from './Projects';

export const ProjectsPage = () => {


  return <>
    <div className='projects-page'>

      {projects.map(project =>
        <Card sx={{ maxWidth: 345 }}  >
          <CardActionArea href={project.link} target='_blank'>
            <CardMedia
              component="img"
              // height="140"
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