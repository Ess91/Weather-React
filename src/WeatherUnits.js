import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [units, setUnits] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (units === "celsius") {
    return (
      <div className="WeatherUnits">
        <span className="temperature">{props.celsius}</span>
        <span className="units">
        °C | {" "}
          <a href="/" onClick={convertToFahrenheit}>
          °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
        <div className="WeatherUnits">
          <span className="temperature">{Math.round(fahrenheit())}</span>
          <span className="units">
            <a href="/" onClick={showCelsius}>
              °C
            </a> {" "}
            | °F
          </span>
        </div>
      );
  }
}
