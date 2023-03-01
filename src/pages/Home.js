import React, {useState} from 'react'
import { useNavigate, Link} from "react-router-dom";

export default function Home() {
  const [city, setCity] = useState('');
  const handleCityChange = (event) => {
    setCity(event.target.value);
    console.log("city is ",city)
  };
  let navigate = useNavigate;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e",e);
    console.log("submit city ",city);
    navigate(
      '/weather',
      {state:{
        city:city
      }}
    );
  };


  return (
    <div>
      <p>Home</p>
    {//  <form onSubmit={handleSubmit}>
    }
        <label>
          Enter a city name:
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <button type="submit"><Link to="/weather" state= {{city:city}}>Get Weather</Link></button>
    {// </form>
      }
    </div>
  )
}
