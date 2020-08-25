import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by {" "}
        <a
          href="https://esscodes.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Esther Agyare-Boateng
        </a>{" "}
        and is {" "}
        <a
          href="https://github.com/Ess91/weather-react-project-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-sourced on Github
        </a>
      </footer>
      </div>
    </div>
  );
}
