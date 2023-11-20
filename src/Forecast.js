import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Forecast">
        <div className="week-weather row">
          <div className="col-2">
            <div className="week-data week-day">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={100} />
            <div className="week-data daily-temperature">
              <strong>{forecast[0].temp.max}º</strong>/{forecast[0].temp.min}º
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "9198c2f9f38a61db3c832af88a96d029";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
