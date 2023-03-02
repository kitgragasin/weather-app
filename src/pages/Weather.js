import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Navigate } from 'react-router-dom';
import WeatherData from '../components/WeatherData';

const Weather = () => {
  
  const [weatherData, setWeatherData] = useState(null);
  const {state} = useLocation();
  const weatherKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

  useEffect(()=>{
    const fetchData =async()=>{
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=${weatherKey}&units=metric`
      );
      const newTemp = ((response.data.main.temp * 9) / 5 + 32).toFixed(2);
      response.data.main.temp = newTemp;
      console.log(response.data)
      setWeatherData(response.data);
    }
    fetchData();
  },[state,weatherKey])
  return state!=null? (
    <div>
      {weatherData && (
        <WeatherData weatherData={weatherData}/>
      )}
    </div>
  ):(<Navigate to='/home'/>);
};

export default Weather;