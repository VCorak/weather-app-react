import React, { useState } from "react";
import FormatDate from "./FormatDate";

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
            <img
              src={props.result.icon}
              alt={props.result.description}
              className="float-left"
            />

            <div className="float-left">
              <strong>{Math.round(props.result.temperature)}</strong>
              <span className="symbols">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
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
      <div className="row HourlyForecast">
        <div className="col">
          <span className="time">12:00</span>
          <br />
          <img
            src={`http://openweathermap.org/img/wn/${props.result.icon}@2x.png`}
            alt={props.result.description}
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
            src={`http://openweathermap.org/img/wn/${props.result.icon}@2x.png`}
            alt={props.result.description}
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
            src={`http://openweathermap.org/img/wn/${props.result.icon}@2x.png`}
            alt={props.result.description}
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
            src={`http://openweathermap.org/img/wn/${props.result.icon}@2x.png`}
            alt={props.result.description}
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
            src={`http://openweathermap.org/img/wn/${props.result.icon}@2x.png`}
            alt={props.result.description}
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
            src={`http://openweathermap.org/img/wn/${props.result.icon}@2x.png`}
            alt={props.result.description}
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
