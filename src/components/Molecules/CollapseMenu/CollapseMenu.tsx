import React from "react";
import useCollapse from "react-collapsed";
import { CollapseMenuProps } from "../../../interfaces/Components.interface";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";

const CollapseMenu = ({ title, children }: CollapseMenuProps) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-muted">
            <small>{title}</small>
          </div>
          <div className="col">
            <div className="float-end">
              <button className="btn btn-light btn-sm" {...getToggleProps()}>
                {isExpanded ? <BsDash /> : <AiOutlinePlus />}
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" {...getCollapseProps()}>
            {children}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollapseMenu;
