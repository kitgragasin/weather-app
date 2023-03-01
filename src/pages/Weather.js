import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Navigate } from 'react-router-dom';

const Weather = () => {
  
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState(null);
  const {state} = useLocation();
  const weatherKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
  const getCurrentDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
  };

  useEffect(()=>{
    const fetchData =async()=>{
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=${weatherKey}&units=metric`
      );
      const newTemp = ((response.data.main.temp * 9) / 5 + 32).toFixed(2);
      response.data.main.temp = newTemp;
      console.log(response.data)
      setWeatherData(response.data);
      setDate(getCurrentDate);
    }
    fetchData();
  },[state,weatherKey])
  return state!=null? (
    <div>
      {weatherData && (
        <div>
          <h2>Current Weather in {weatherData.name}</h2>
          <table>
            <tbody>
              <tr>
                <td>Date:</td>
                <td>Temperature:</td>
                <td>Description:</td>
                <td>Main</td>
                <td>Humidity:</td>
                
              </tr>
              <tr>
                <td>{date}</td>
                <td>
                  {weatherData.main.temp}°F
                </td>
                <td>{weatherData.weather[0].description}</td>
                <td>{weatherData.weather[0].main}</td>
                <td>{weatherData.main.humidity}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  ):(<Navigate to='/home'/>);
};

export default Weather;