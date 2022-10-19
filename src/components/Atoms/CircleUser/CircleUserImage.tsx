import React from "react";
import { CircleUserImageProps } from "../../../interfaces/Components.interface";
import "./CircleUserImage.css";

const CircleUserImage = ({ src, variant }: CircleUserImageProps) => {
  return (
    <img src={src} className={`rounded-circle img-user-${variant}`} alt="" />
  );
};

export default CircleUserImage;
