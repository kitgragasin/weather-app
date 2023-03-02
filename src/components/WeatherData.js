import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
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
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableCell align='center'>Date</TableCell>
                  <TableCell align='center'>Temperature</TableCell>
                  <TableCell align='center'>Description</TableCell>
                  <TableCell align='center'>Main</TableCell>
                  <TableCell align='center'>Humidity</TableCell>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align='center'>{date}</TableCell>
                    <TableCell align='center'>{weatherData.main.temp}°F</TableCell>
                    <TableCell align='center'>{weatherData.weather[0].description}</TableCell>
                    <TableCell align='center'>{weatherData.weather[0].main}</TableCell>
                    <TableCell align='center'>{weatherData.main.humidity}%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      ):(<Navigate to='/home'/>);
  
}
