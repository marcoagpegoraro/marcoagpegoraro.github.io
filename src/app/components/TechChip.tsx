import React from 'react'
import Chip from '@mui/material/Chip';
import { Avatar } from '@mui/material';

interface params {
  label: string
  imageUrl: string
}


const TechChip = ({ label, imageUrl }: params) => {
  return <>
    <Chip
      style={{margin: 1}}
      avatar={<Avatar alt={label} src={imageUrl} />}
      label={label}
    />
  </>
}

export default TechChip