import React from "react";
import { ButtonIconProps } from "../../../interfaces/Components.interface";

const ButtonIcon = ({ onClick, children, variant }: ButtonIconProps) => {
  return (
    <button className={`btn btn-light btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonIcon;
