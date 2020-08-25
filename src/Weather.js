import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
          <div className="row">
              <div className="col-9">
        <input
          type="search"
          placeholder="Enter City.."
          className="form-control"
        />
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary"/>
     </div>
      </div>
      
      </form>
      <h1>London</h1>
      <ul>
        <li>Wednesday, 07:00</li>
        <li>Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          17°C
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
}
