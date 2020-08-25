import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormatDate date={props.data.date} />
            </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
                <div className="float-left">
                <WeatherIcon code={props.data.icon} />
                </div>
            
              <div className="float-left">
                <span className="temperature">{props.data.temperature}</span>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}mph</li>
            </ul>
          </div>
          </div>
        </div>
    );
}