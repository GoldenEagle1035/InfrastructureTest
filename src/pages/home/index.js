import React from 'react'
import "./style.scss";
import { Box, Button, Container, Typography } from '@mui/material';
import GradientButton from '../../components/GradientButton';
import UserAvatar1 from "../../assets/images/avatar1.svg";
import LockIcon from "../../assets/images/lock.svg";
import ArrowDown from "../../assets/images/arrow-down.svg";

export default function Home() {
  return (
    <Box className='page-home'>
      <Container className='banner'>
        <Box>
          <Typography className='label'>Lorem ipsum dolor</Typography>
          <Typography className='title' component="h1">Game-changing infrastructure</Typography>
          <Typography className='description'>A decentralised, non-custodial social graph, empowering players to take full ownership of their gaming identities and enabling developers to build next-gen applications. </Typography>
          <Button className='btn-normal'>Join Discord</Button>
        </Box>
        <Box className="user-info">
          <Box sx={{ marginBottom: '35px' }}>
            <Box className="user-icon" component="img" src={UserAvatar1} alt='avatar' />
            <Typography className="user-id-label">User id:</Typography>
            <Typography className='user-id'>XBorg001</Typography>
          </Box>
          <GradientButton sx={{ marginBottom: "15px" }} icon={LockIcon} />
          <GradientButton>Soulbound Launchpad</GradientButton>
          <Box sx={{ marginTop: "8px" }} className="flex-center">
            <GradientButton>Soulbound Launchpad</GradientButton>
            <GradientButton>Soulbound Launchpad</GradientButton>
          </Box>
        </Box>
      </Container>
      <Box className='btn-scrolldown'>
        <Typography className='link-text'>Scroll down</Typography>
        <Box className='arrow-down' component="img" src={ArrowDown} alt='arrow-down' />
      </Box>
    </Box>
  )
}
