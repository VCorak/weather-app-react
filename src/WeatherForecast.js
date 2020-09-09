import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  const [onLoad, setOnLoad] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayHourForecast(response) {
    setForecast(response.data);
    setOnLoad(true);
    console.log(response.data);
  }

  if (onLoad && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
        <WeatherForecastPreview data={forecast.list[4]} />
        <WeatherForecastPreview data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = `dc3b4bf1b160e133e1bbb630f9cef74a`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayHourForecast);

    return null;
  }
}