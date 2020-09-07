import React, { useState } from "react";
import Weather from "./Weather";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setResult(<Weather city={city} />);
  }

  function updateCity(event) {
    let city = "Antwerp";
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row Form">
          <div className="col-7">
            <input
              type="search"
              placeholder="Type a city.."
              autoComplete="Off"
              className="form-control shadow sm"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="form-control btn btn-primary shadow sm"
              value="Search"
            />
          </div>

          <button className="btn btn-primary shadow sm">↺</button>
        </div>
      </form>
      {result}
    </div>
  );
}
