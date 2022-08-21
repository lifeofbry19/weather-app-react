import React from "react";

const Location = ({ weather, isLoading }) => {
  return (
    <div className="location">
      <div className={isLoading ? "city hidden" : "city"}>
        <strong>{weather.name}</strong>
      </div>
    </div>
  );
};

export default Location;
