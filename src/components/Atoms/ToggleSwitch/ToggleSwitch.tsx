import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = (props: any) => {
  return (
    <div className="flipswitch">
      <input
        type="checkbox"
        name="flipswitch"
        className="flipswitch-cb"
        id="fs"
        onChange={props.onChange}
      />
      <label className="flipswitch-label" htmlFor="fs">
        <div className="flipswitch-inner"></div>
        <div className="flipswitch-switch"></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
