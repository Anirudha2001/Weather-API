import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';
 
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
 
  const fetchWeather = async (city) => {
    const apiKey = 'd1845658f92b31c64bd94f06f7188c9c';
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };
 
  return (
<div className="App">
<h1>Weather App</h1>
<WeatherForm fetchWeather={fetchWeather} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
</div>
  );
};
 
export default App;