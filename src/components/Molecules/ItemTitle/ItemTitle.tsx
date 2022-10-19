import React from "react";
import { ItemTitleProps } from "../../../interfaces/Components.interface";

const ItemTitle = ({ title, children }: ItemTitleProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="float-end">
            <span className="text-muted">{title}</span>
          </div>
        </div>
        <div className="col">
          <div className="float-start">
            <span>{children}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTitle;
