import React from "react";
import seasonDisplay from "./style/seasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "It's seems like very hot weather in your location",
    iconName: "sun",
  },
  winter: {
    text: "It's seems like very cold in your location",
    iconName: "snowflake",
  },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className= {`season-display ${season}`}>
      <i className={`left-icon massive ${iconName} icon`} />
      <h3>({new Date().toDateString()})</h3>
      <h1>{text}</h1>
      <i className={`right-icon massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
