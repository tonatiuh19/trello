import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <div className="flipswitch">
      <input
        type="checkbox"
        name="flipswitch"
        className="flipswitch-cb"
        id="fs"
      />
      <label className="flipswitch-label" htmlFor="fs">
        <div className="flipswitch-inner"></div>
        <div className="flipswitch-switch"></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
