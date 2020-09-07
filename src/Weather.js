import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState("");

  function showResults(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  let apiKey = `dc3b4bf1b160e133e1bbb630f9cef74a`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showResults);

  return (
    <div className="Weather">
      <h1>{props.city}</h1>
      <ul>
        <li>
          <span>Monday 11:33</span>
        </li>
        <li>{description}</li>
      </ul>
      <div className="row Indicators">
        <div className="col-6">
          <div className="clearfix-weather-values">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
              className="float-left"
            />

            <div className="float-left">
              <strong>{Math.round(temperature)}</strong>
              <span className="symbols">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(humidity)}%</li>
            <li>Wind: {Math.round(wind)} km/h</li>
          </ul>
        </div>
      </div>
      <div className="row HourlyForecast">
        <div className="col">
          <span className="time">12:00</span>
          <br />
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="float-left"
          />
          <br />
          <span className="temp">12° </span>
          <span className="temp">20°</span>
        </div>
        <div className="col">
          <span className="time">12:00</span>
          <br />
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="float-left"
          />
          <br />
          <span className="temp">12° </span>
          <span className="temp">20°</span>
        </div>
        <div className="col">
          <span className="time">12:00</span>
          <br />
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="float-left"
          />
          <br />
          <span className="temp">12° </span>
          <span className="temp">20°</span>
        </div>
        <div className="col">
          <span className="time">12:00</span>
          <br />
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="float-left"
          />
          <br />
          <span className="temp">12° </span>
          <span className="temp">20°</span>
        </div>
        <div className="col">
          <span className="time">12:00</span>
          <br />
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="float-left"
          />
          <br />
          <span className="temp">12° </span>
          <span className="temp">20°</span>
        </div>
        <div className="col">
          <span className="time">12:00</span>
          <br />
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="float-left"
          />
          <br />
          <span className="temp">12° </span>
          <span className="temp">20°</span>
        </div>
      </div>
    </div>
  );
}
