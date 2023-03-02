import React, {useState} from 'react'
import {  Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, TextField } from '@mui/material';

export default function Home() {
  const [city, setCity] = useState('');
  const { user, isAuthenticated } = useAuth0();
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <Container maxWidth="sm">
      <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>
        <label>
          <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handleCityChange}>
          </TextField>
          
        </label>
        </p>
        <Button variant="contained" color="inherit" type="submit"><Link to="/weather" state= {{city:city}}>Get Weather</Link></Button>
      </Container>

    </div>
  )
}
