import React, { useState } from "react";

const lodar = () => {
  const [data, setData] = useState("");
  return (
    <div className="ui active dimmer">
      <div className="ui large text loader">Check for location access</div>
    </div>
  );
};

export default lodar;
