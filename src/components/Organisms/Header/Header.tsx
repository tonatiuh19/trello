import React from "react";
import OverlapAvatars from "../../Atoms/OverlapAvatars/OverlapAvatars";
import ToggleSwitch from "../../Atoms/ToggleSwitch/ToggleSwitch";
import Dropdown from "../../Molecules/Dropdown/Dropdown";
import ItemTitle from "../../Molecules/ItemTitle/ItemTitle";
import Searcher from "../../Molecules/Searcher/Searcher";
import "./Header.css";

const Header = () => {
  return (
    <div className="sticky-top border-bottom header">
      <div className="container px-5 pt-5 pb-3">
        <div className="row mb-1">
          <div className="col">
            <h3>Stripe payments</h3>
          </div>
          <div className="col">
            <div className="float-end">
              <ToggleSwitch />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Dropdown />
          </div>
          <div className="col">
            <ItemTitle title="Created on:" children="May 13" />
          </div>
          <div className="col">
            <ItemTitle title="Created on:" children={<OverlapAvatars />} />
          </div>
          <div className="col-4">
            <div className="float-end">
              <Searcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
