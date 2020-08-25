import React, { useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp)
    }

    if (ready) {
      return (
        <div className="Weather">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter City.."
                  className="form-control"
                  autoFocus="on"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <h1>London</h1>
          <ul>
            <li>Wednesday, 07:00</li>
            <li>Cloudy</li>
          </ul>
    
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="cloudy"
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">17</span>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 38%</li>
                <li>Humidity: 88%</li>
                <li>Wind: 11mph</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      const apiKey = "c788fbd12920cbf73a67468fe8b0facb";
      let city = "London"
      let apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }  
}
