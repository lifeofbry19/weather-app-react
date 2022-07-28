import Location from "./components/Location";
import CurrentDate from "./components/CurrentDate";
import Weather from "./components/Weather";
import React, { useState, useEffect } from "react";

function App() {
  const API_KEY = `${process.env.REACT_APP_API_KEY}`;

  const api = {
    baseurl: "https://api.openweathermap.org/geo/1.0/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  let weatherFetched;
  if (!weather.main) {
    weatherFetched = false;
  } else {
    weatherFetched = true;
    console.log(weather);
  }

  function handleInputEntered(e) {
    if (e.key === "Enter") {
      let arr = search.split(",");
      console.log(arr);
      const [city, state] = arr;
      console.log(city, state);
      getCoordsFromAPI(city, state);
    }
  }

  function getCoordsFromAPI(city, state) {
    fetch(`${api.baseurl}direct?q=${city},${state},+1&limit=1&appid=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((coords) => {
        console.log(coords);
        const lat = coords[0]["lat"];
        const lon = coords[0]["lon"];
        getResults(lat, lon);
      });
  }

  function getResults(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.error("There was an error fetching data"))
      .then((data) => {
        setWeather(data);
      });
  }

  return (
    <div
      className="main-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px",
        gap: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Search for a city..."
        onKeyPress={handleInputEntered}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <Location weather={weather} />
      {weatherFetched ? <CurrentDate /> : <></>}
      {weatherFetched ? <Weather weather={weather} /> : <></>}
    </div>
  );
}

export default App;
