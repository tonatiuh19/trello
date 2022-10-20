import React from "react";
import "./Loading.css";
import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="loadingFull">
      <BiLoaderCircle />
    </div>
  );
};

export default Loading;
