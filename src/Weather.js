import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleresponse(response) {
    alert(
      ` Hello from ${props.city}, it is ${Math.round(
        response.data.main.temp
      )}ºC`
    );
  }

  let apiKey = "e60cfe91a731d94cdd654022271b22a3";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleresponse);

  return <h1>Hi there!</h1>;
}
