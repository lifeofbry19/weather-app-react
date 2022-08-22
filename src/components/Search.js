import React from "react";

const Search = ({ search, setWeather, setIsLoading, setSearch }) => {
  const API_KEY = `${process.env.REACT_APP_API_KEY}`;
  const api = {
    baseurl: "https://api.openweathermap.org/geo/1.0/",
  };

  function handleInputEntered(e) {
    if (e.key === "Enter") {
      let arr = search.split(",");
      console.log(arr);
      const [city, countryCode] = arr;
      console.log(city, countryCode);
      getCoordsFromAPI(city, countryCode);
    }
  }

  function getCoordsFromAPI(city, countryCode = "") {
    setIsLoading(true);
    setTimeout(() => {
      fetch(
        `${api.baseurl}direct?q=${city},${
          countryCode ? countryCode : "+1"
        }&limit=1&appid=${API_KEY}`
      )
        .then((response) => {
          return response.json();
        })
        .then((coords) => {
          console.log(coords);
          const lat = coords[0]["lat"];
          const lon = coords[0]["lon"];
          getResults(lat, lon);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
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
    <input
      type="text"
      placeholder="ex: City, Country Code (optional)"
      onKeyPress={handleInputEntered}
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  );
};

export default Search;
