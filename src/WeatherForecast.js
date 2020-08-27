import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ThreeHourlyForecast from "./ThreeHourlyForecast";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);  
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
   <div className="WeatherForecast row">
       {forecast.list.slice(0, 6).map(function (forecastItem) {
           return <ThreeHourlyForecast data={forecastItem} />;
       })}
       
   </div>
  
    )
  } else {
    let apiKey = "c788fbd12920cbf73a67468fe8b0facb";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
