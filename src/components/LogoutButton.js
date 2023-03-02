import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <Button color="inherit" onClick={() => {
      logout({ 
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    }}>Log out</Button>
  );
}

export default LogoutButton;