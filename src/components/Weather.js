import React from "react";

const Weather = ({ weather = {} }) => {
  return (
    <div className="weather">
      <div className="temp">
        {Math.round((weather["main"]["temp"] - 273.15) * (9 / 5) + 32)}&deg;F
      </div>
      <div className="skies" style={{ fontSize: "30px" }}>
        {weather["weather"][0]["main"]}
      </div>
      <div className="hi-low" style={{ fontSize: "27px" }}>
        {Math.round((weather["main"]["temp_min"] - 273.15) * (9 / 5) + 32)}
        &deg;F /{" "}
        {Math.round((weather["main"]["temp_max"] - 273.15) * (9 / 5) + 32)}
        &deg;F
      </div>
    </div>
  );
};

export default Weather;
