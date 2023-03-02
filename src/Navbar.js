import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import {Link } from "react-router-dom";
import LogoutButton from "./components/LogoutButton";
import { Menu } from '@mui/icons-material';


function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ color: '#FFF' }} to="/home">Home</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ color: '#FFF' }} to="/weather">Weather</Link>
            </Typography>
            <LogoutButton/>
          </Toolbar>
        </AppBar>
      </Box>
    </>
    
  );
}

export default Navbar;