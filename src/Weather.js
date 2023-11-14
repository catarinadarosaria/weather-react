import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(Math.round(response.data.main.temp));
  }

  let apiKey = "e60cfe91a731d94cdd654022271b22a3";
  let city = "Porto";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);

  return (
    <div className="container">
      <div className="weather-app">
        <form id="search-form" className="mb-3 search-bar" onChange>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control city-bar"
                id="city-input"
                autoComplete="off"
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
            <div className="row">
              <div className="col-4 text-left">
                <h1>Lille</h1>
                <p className="date-time">Sunday, 17:13</p>
                <h3>Clouds</h3>
                <ul className="precise-weather">
                  <li id="humidity">Humidity: 20%</li>
                  <li id="wind">Wind: 20km/h</li>
                </ul>
              </div>
              <div className="col-4 current-weather text-center">
                <img src="images/sun.png" alt="Icon - Sun" id="icon" />
              </div>
              <div className="col-4 current-temperature text-right">
                <div>
                  <span className="temperature" id="temperature-value">
                    13
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
          </div>
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
}
