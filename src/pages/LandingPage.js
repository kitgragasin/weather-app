import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import LoginButton from '../components/LoginButton'
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from 'react-router-dom';

export default function LandingPage() {
  const {isAuthenticated } = useAuth0();
  return !isAuthenticated?(
    <div>
      <Container maxWidth="sm">
        <Typography variant='subtitle2'>
          Welcome to the weather forecast web application. Please login to use the application and view the weather in the city
        </Typography>
        <LoginButton/>
      </Container>
      
    </div>

  ):(<Navigate to='/home'/>)
}
