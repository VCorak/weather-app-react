import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Main temp">
        <strong>{Math.round(props.celsius)}</strong>
        <span className="symbols">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Main temp">
        <strong>{Math.round(fahrenheit())}</strong>
        <span className="symbols">
          <a href="/" onClick={convertToCelsius}>
            °C |
          </a>
        </span>
      </div>
    );
  }
}
