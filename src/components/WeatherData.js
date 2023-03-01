import React,{useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom';

export default function WeatherData(props) {
    const weatherData = props.weatherData;
    const [date, setDate] = useState(null);
    console.log("nagweather data")
    const getCurrentDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const year = today.getFullYear();
        return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    };
    useEffect(()=>{
        setDate(getCurrentDate);
    },[])
    return weatherData!=null?(
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
  
}
