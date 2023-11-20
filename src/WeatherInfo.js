import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4 text-left">
          <h1 className="city-name mt-4">{props.data.city}</h1>
          <p className="date-time">
            <FormattedDate date={props.data.date} />
          </p>
          <h3 className=" description text-capitalize">
            {props.data.description}
          </h3>
          <ul className="precise-weather">
            <li id="humidity">Humidity: {props.data.humidity}%</li>
            <li id="wind">
              Wind: {Math.round((props.data.wind * 3600) / 1000)}km/h
            </li>
          </ul>
        </div>
        <div className="col-4 current-weather d-flex justify-content-center align-items-center">
          <WeatherIcon code={props.data.icon} size={300} />
        </div>
        <div className="col-4 current-temperature text-right mt-4">
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
