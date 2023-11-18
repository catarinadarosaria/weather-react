import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
    console.log(Math.round(response.data));
  }
  function search() {
    const apiKey = "eff2995d6685ce8bb4f60a2ab4894754";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <form
            id="search-form"
            className="mb-3 search-bar"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control city-bar"
                  id="city-input"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100 search-button"
                  id="search-location-button"
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-primary w-100 search-button"
                  id="current-location-button"
                >
                  current
                </button>
              </div>
            </div>
          </form>
          <div className="weather-info">
            <div className="header">
              <WeatherInfo data={weatherData} />
            </div>
            {/*
            <div className="week-weather row">
              <div className="col-2">
                <div className="week-data week-day">Mon</div>
                <img src="images/sun.png" alt="Sun" />
                <div className="week-data daily-temperature">
                  <strong>9º</strong>/2º
                </div>
              </div>
              <div className="col-2">
                <div className="week-data week-day">Tue</div>
                <img src="images/sun-cloud.png" alt="Sun with Clouds" />
                <div className="week-data daily-temperature">
                  <strong>10º</strong>/0º
                </div>
              </div>
              <div className="col-2">
                <div className="week-data week-day">Wed</div>
                <img src="images/sun-cloud.png" alt="Sun with Clouds" />
                <div className="week-data daily-temperature">
                  <strong>17º</strong>/6º
                </div>
              </div>
              <div className="col-2">
                <div className="week-data week-day">Thu</div>
                <img src="images/cloud.png" alt="Clouds" />
                <div className="week-data daily-temperature">
                  <strong>15º</strong>/11º
                </div>
              </div>
              <div className="col-2">
                <div className="week-data week-day">Fri</div>
                <img src="images/rain.png" alt="Rain" />
                <div className="week-data daily-temperature">
                  <strong>12º</strong>/10º
                </div>
              </div>
              <div className="col-2">
                <div className="week-data week-day">Sat</div>
                <img src="images/sun.png" alt="Sun" />
                <div className="week-data daily-temperature">
                  <strong>12º</strong>/8º
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        <footer>
          <a
            className="gitLink"
            href="https://github.com/catarinadarosaria/world-clock"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          code by{" "}
          <a
            className="myWebsite"
            href="https://catarinarosaria.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Catarina da Rosária
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
