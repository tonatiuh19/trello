import React from "react";
import "./OverlapAvatars.css";

const OverlapAvatars = () => {
  return (
    <div className="main-container">
      <div id="icons-container">
        <div className="single-icon-container">
          <img
            src="https://i.pravatar.cc/300"
            alt=""
            className="icon"
            id="icon1"
          />
        </div>
        <div className="single-icon-container">
          <img
            src="https://i.pravatar.cc/300"
            alt=""
            className="icon"
            id="icon2"
          />
        </div>
        <div className="single-icon-container">
          <img
            src="https://i.pravatar.cc/300"
            alt=""
            className="icon"
            id="icon3"
          />
        </div>
        <div className="single-icon-container">
          <img
            src="https://i.pravatar.cc/300"
            alt=""
            className="icon"
            id="icon4"
          />
        </div>
      </div>
    </div>
  );
};

export default OverlapAvatars;
