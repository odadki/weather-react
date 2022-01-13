import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d4abd23a84756d0308b620a46b653aca";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
&units=${units}`;

    axios.get(apiUrl).then(showWeather);
    setInfo(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setInfo(city);
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
  }

  return (
    <div className="WeatherSearch">
      <form className="weather-search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={updateCity}
          className="search-field"
        />
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </form>
      <div className="row">
        <div className="col-6">
          <span className="complete-weather-info">
            <ul className="list-style">
              <li className="weather-info">{info}</li>
              <li className="list-decoration-desc">{description}</li>
              <li className="list-decoration">Humidity: {humidity}%</li>
              <li className="list-decoration">
                Wind speed: {Math.round(wind)} km/h
              </li>
            </ul>
          </span>
        </div>
        <div className="col-6">
          <span className="temperature-icon">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              className="weather-icon"
              alt=""
            />
            <span className="temp">
              <span className="temp-reading">{Math.round(temperature)}</span>
              <span className="farehnheit">°F</span>
            </span>
          </span>
        </div>
      </div>
      <p></p>
    </div>
  );
}
