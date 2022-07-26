import React from "react";

const CurrentDate = () => {
  const now = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let weekday = days[now.getDay()];
  let today = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  return (
    <div className="date">
      <strong>
        <em>
          {weekday} {today} {month}, {year}
        </em>
      </strong>
    </div>
  );
};

export default CurrentDate;
