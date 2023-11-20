import React from "react";
import {
  WiDaySunny,
  WiMoonAltFull,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayRain,
  WiNightRain,
  WiDayThunderstorm,
  WiNightSleetStorm,
  WiSnowflakeCold,
  WiWindy,
} from "weather-icons-react";

export default function WeatherIcon(props) {
  const iconMapping = {
    "01d": WiDaySunny,
    "01n": WiMoonAltFull,
    "02d": WiDayCloudy,
    "02n": WiNightCloudy,
    "03d": WiCloud,
    "03n": WiCloud,
    "04d": WiCloudy,
    "04n": WiCloudy,
    "09d": WiRain,
    "09n": WiRain,
    "10d": WiDayRain,
    "10n": WiNightRain,
    "11d": WiDayThunderstorm,
    "11n": WiNightSleetStorm,
    "13d": WiSnowflakeCold,
    "13n": WiSnowflakeCold,
    "50d": WiWindy,
    "50n": WiWindy,
  };
  const SelectedIcon = iconMapping[props.code];
  return (
    <div className="WeatherIcon">
      <SelectedIcon size={props.size} color="rgb(13, 120, 247)" />
    </div>
  );
}
