import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";

import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [result, setResult] = useState({ ready: false });

  function showResults(response) {
    setResult({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResults);
  }

  function instantLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResults);
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(<WeatherForecast />);
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(instantLocation);
  }

  if (result.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row Form">
            <div className="col-7">
              <input
                type="search"
                placeholder="Type a city.."
                autoComplete="off"
                autoFocus="on"
                className="form-control shadow sm"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="form-control btn btn-primary shadow sm w-100"
                value="Search"
              />
            </div>

            <button
              className="update btn btn-primary shadow sm"
              type="submit"
              onClick={getCurrentLocation}
            >
              ↺
            </button>
          </div>
        </form>

        <Weather result={result} />
        <WeatherForecast city={result.city} />
      </div>
    );
  } else {
    searchCity();
    return "Searching...";
  }
}
