import Location from "./components/Location";
import CurrentDate from "./components/CurrentDate";
import Weather from "./components/Weather";
import Search from "./components/Search";
import React, { useState, useEffect } from "react";
import Spinner from "./images/spinner.svg";
import BackgroundController from "./components/BackgroundController";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  // const [forecast, setForecast] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [weatherFetched, setWeatherFetched] = useState(false);
  let weatherFetched;
  if (!weather.main) {
    weatherFetched = false;
  } else {
    weatherFetched = true;
  }

  /*   function getForecast(lat, lon) {
    fetch(
      `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.error("There was an error fetching data"))
      .then((data) => {
        setForecast(data);
        console.log(forecast);
      });
  } */

  return (
    <div className="main-wrapper">
      <BackgroundController weather={weather} />
      <div className="weather-card">
        <Search
          search={search}
          setWeather={setWeather}
          setSearch={setSearch}
          setIsLoading={setIsLoading}
        />
        <iframe
          className="spinner"
          src={isLoading ? Spinner : ""}
          frameborder="0"
        ></iframe>
        {!isLoading ? (
          <Location weather={weather} isLoading={isLoading} />
        ) : (
          <></>
        )}
        {!isLoading && weatherFetched ? <CurrentDate /> : <></>}
        {!isLoading && weatherFetched ? <Weather weather={weather} /> : <></>}
      </div>
    </div>
  );
}

export default App;
