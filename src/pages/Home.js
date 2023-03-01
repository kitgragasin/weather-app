import React, {useState} from 'react'
import {  Link, redirect} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const [city, setCity] = useState('');
  const { user, isAuthenticated } = useAuth0();
  const handleCityChange = (event) => {
    setCity(event.target.value);
    console.log("city is ",city)
  };

  console.log(isAuthenticated)
  // if(!isAuthenticated){
  //   console.log('is not authenticated')
  //   return redirect('/');
  // }
  return (
    <div>
      <p>Home</p>
        <label>
          Enter a city name:
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <button type="submit"><Link to="/weather" state= {{city:city}}>Get Weather</Link></button>
    </div>
  )
}
