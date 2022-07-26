import React from "react";

const Weather = () => {
  return (
    <div className="weather">
      <div className="temp">102&deg;F</div>
      <div className="skies" style={{ fontSize: "30px" }}>
        Clear
      </div>
      <div className="hi-low" style={{ fontSize: "27px" }}>
        99&deg;F / 105&deg;F
      </div>
    </div>
  );
};

export default Weather;
