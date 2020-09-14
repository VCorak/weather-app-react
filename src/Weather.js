import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1>{props.result.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.result.date} />
        </li>
        <li>{props.result.description}</li>
      </ul>
      <div className="row Indicators">
        <div className="col-6">
          <div className="clearfix-weather-values">
            <div className="float-left">
              <WeatherIcon icon={props.result.icon} />
            </div>
            <div className="float-left">
              <TemperatureConversion celsius={props.result.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(props.result.humidity)}%</li>
            <li>Wind: {Math.round(props.result.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
