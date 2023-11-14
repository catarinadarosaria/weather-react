import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4 text-left">
          <h1>{props.data.city}</h1>
          <p className="date-time">
            <FormattedDate date={props.data.date} />
          </p>
          <h3 className="text-capitalize">{props.data.description}</h3>
          <ul className="precise-weather">
            <li id="humidity">Humidity: {props.data.humidity}%</li>
            <li id="wind">
              Wind: {Math.round((props.data.wind * 3600) / 1000)}km/h
            </li>
          </ul>
        </div>
        <div className="col-4 current-weather text-center">
          <img src="images/sun.png" alt="Icon - Sun" id="icon" />
        </div>

        <div className="col-4 current-temperature text-right">
          <div>
            <span className="temperature" id="temperature-value">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">
              <a href="/" id="celsius">
                ºC
              </a>{" "}
              |
              <a href="/" id="fahrenheit">
                ºF
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
