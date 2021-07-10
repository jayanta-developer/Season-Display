import React from "react";
import seasonDisplay from "./style/seasonDisplay.css";

const Error = (props) => {
  return (
    <div className="error-page">
      <h1 className="error-massage">{props.Error}</h1>
    </div>
  );
};

export default Error;
