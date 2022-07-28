import React from "react";

const Location = ({ weather }) => {
  return (
    <div className="location">
      <div className="city" style={{ fontSize: "30px" }}>
        <strong>{weather.name}</strong>
      </div>
    </div>
  );
};

export default Location;
