import React from "react";
import { useEffect } from "react";
import Sun from "../images/sun.svg";
import Moon from "../images/moon.svg";

const BackgroundController = ({ weather }) => {
  /* if it is dark where the user chooses, 
  change the background color and the icon */
  let skyIcon = Sun;
  useEffect(() => {
    if (weather.main) {
      if (
        weather.dt < weather["sys"]["sunrise"] &&
        weather.dt > weather["sys"]["sunset"]
      ) {
        document.body.style.backgroundColor = "rgb(31, 31, 31)";
        skyIcon = Moon;
        console.log("effect used!");
      } else {
        document.body.style.backgroundColor = "#77dada";
        skyIcon = Sun;
      }
    }
  }, [weather]);

  return <img className="sky-icon" src={skyIcon} alt="" />;
};

export default BackgroundController;
