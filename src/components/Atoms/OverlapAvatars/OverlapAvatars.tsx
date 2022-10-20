import React from "react";
import { User } from "../../../interfaces/Board.interface";
import "./OverlapAvatars.css";

const OverlapAvatars = (props: any) => {
  return (
    <div className="main-container">
      <div id="icons-container">
        {props.users.map((item: User, index: number) => {
          if (props.header) {
            if (index <= 2) {
              return (
                <div key={index} className="single-icon-container">
                  <img src={item.picture} alt="" className="icon" id="icon1" />
                </div>
              );
            } else {
              return null;
            }
          } else {
            return (
              <div key={index} className="single-icon-container">
                <img src={item.picture} alt="" className="icon" id="icon1" />
              </div>
            );
          }
        })}
        <>
          {props.header ? (
            <div className="single-icon-container">
              <span className="icon icon-text">+4</span>
            </div>
          ) : null}
        </>
      </div>
    </div>
  );
};

export default OverlapAvatars;
