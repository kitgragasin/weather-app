import React, {useState} from 'react'
import {  Link} from "react-router-dom";

export default function Home() {
  const [city, setCity] = useState('');
  const handleCityChange = (event) => {
    setCity(event.target.value);
    console.log("city is ",city)
  };

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
