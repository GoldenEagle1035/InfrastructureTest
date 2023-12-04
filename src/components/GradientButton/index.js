import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import "./style.scss";

export default function GradientButton({ sx, className, icon, children }) {
  return (
    <Box className={className} sx={sx}>
      <Button className={`btn-gradient`}>
        {icon && <Box className="btn-icon" component="img" src={icon} alt='icon' />}
        <Typography className='btn-text'>{children}</Typography>
      </Button>
    </Box>
  )
}
