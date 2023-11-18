import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="temperature-value">
          {Math.round(props.celsius)}
        </span>
        <span className="units">
          ºC |
          <a href="/" id="fahrenheit" onClick={showFarenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    function farenheitTemperature() {
      return (props.celsius * 9) / 5 + 32;
    }
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="temperature-value">
          {Math.round(farenheitTemperature())}
        </span>
        <span className="units">
          {" "}
          <a href="/" id="celsius" onClick={showCelsius}>
            ºC{" "}
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
