import React from "react";
import "./Alert.css";

const Alert = (props: any) => {
  return (
    <div
      className="modal-wrapper"
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className="modal-container custom-scroll"
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Alert;
