import React, { useState } from "react";
import "./App.css";
import axios from "axios";


const api = {
  key: "a9bf793831bb9bb40c281a3c91eff909",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setquery] = useState("");
  const [weather, setweather] = useState("");

  const search = evt => {
    if (evt.key === "Enter") {
      // fetch()
      axios.get(`$(api.base)weather?q=${query}&units=metric&APPID=${api.key}`)
        // getting json form response
        .then(res => res.json())
        .then(result => {
          setweather(result);
          setquery("");
          console.log(result);
          console.log(weather);
        });
    }
  };

  return (
    <div className="App">
      <video autoPlay muted loop className="video">
        <source src={require("./assests/bg.mp4")} type="video/mp4" />
      </video>

      <div className="main">
        <h1 className="headig">weather map</h1>

        <div className="main_content">
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Enter the city/state"
              onChange={(e) => setquery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ?

            (
              <div className="data_wet">
                <div className="location-box">
                  <div className="location">{weather.name},{weather.sys.country}</div>
                  <div className="date">02-02-2020</div>
                </div>

                <div className="weather-box">
                  <div className="temp">{Math.round(weather.main.temp)}*c</div>
                  <div className="weather">{weather.weather[0].main}</div>
                </div>
              </div>
            ) : (<h1>Enter the city/state</h1>)}

        </div>
      </div>
    </div>
  );
}

export default App;
