import React, { useState, useEffect } from 'react';
import './App';

const Weather = () => {
  const [city, setCity] = useState("HYDERABAD"); 
  const [result, setResult] = useState("");
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {

    fetchWeather(city);

    
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        setResult(`Temperature at ${city}\n${Math.round(celsius)}°C`);
      })
      .catch((error) => console.log(error));
    setCity("");
  };

  return (
    <div className="weather-container">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Weather App</h4>
          <div className="date-time">{dateTime}</div>
          <form onSubmit={submitHandler}>
            <input
              size="30"
              type="text"
              name="city"
              onChange={changeHandler}
              value={city}
              placeholder="Enter city"
              className="input-field"
            />
            <br />
            <br />
            <input type="submit" value="Get Temperature" className="submit-button" />
          </form>
          <br />
          <br />
          <div className="result-box">
            <h1>{result}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
