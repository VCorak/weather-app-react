import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    return `${hours}:00`;
  }

  function temperature() {
    let temp_min = Math.round(props.data.main.temp_min);
    let temp_max = Math.round(props.data.main.temp_max);
    return (
      <div>
        <strong>{temp_max}°</strong> 
        {temp_min}°
      </div>
    );
  }

  return (
    <div className="col WeatherForecastPreview">
      {hours()}
      <WeatherIcon icon={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
