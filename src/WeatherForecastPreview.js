import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    return <div className="ForecastHours">{`${hours}:00`}</div>;
  }

  function temperature() {
    
    let maxTemp = Math.round(props.data.main.temp_max);
    let minTemp = Math.round(props.data.main.temp_min);

    return (
      <div className="tempMaxMin">
        <strong>{maxTemp}°</strong> {""}
        {minTemp}°
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
