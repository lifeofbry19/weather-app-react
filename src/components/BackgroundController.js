import React from "react";
import { useEffect } from "react";
import Sun from "../images/sun.svg";
import Moon from "../images/moon.svg";

const BackgroundController = ({ weather }) => {
  /* if it is dark where the user chooses, 
  change the background color and the icon */
  let skyIcon = Sun;
  const now = Date.now() / 1000;

  useEffect(() => {
    if (weather.main) {
      const skyIconEl = document.querySelector(".sky-icon");
      const sunrise = parseInt(weather["sys"]["sunrise"]);
      const sunset = parseInt(weather["sys"]["sunset"]);
      if (now > sunrise && now < sunset) {
        document.body.style.backgroundColor = "#77dada";
        skyIconEl.src = Sun;
        skyIconEl.style.transform = "translateY(160px)";
      } else {
        document.body.style.backgroundColor = "rgb(31, 31, 31)";
        skyIconEl.src = Moon;
        skyIconEl.style.transform = "translateY(160px)";
        console.log("night time!");
        console.log({ now, sunrise, sunset });
        console.log(now > sunrise);
        console.log(now < sunset);
      }
    }
  }, [weather]);

  return <img className="sky-icon" alt="" />;
};

export default BackgroundController;
