import React from "react";
import "./Searcher.css";
import { BiSearch } from "react-icons/bi";

const Searcher = () => {
  return (
    <div className="input-group input-group-sm mb-3">
      <button className="btn btn-secondary" type="button" id="button-addon1">
        <BiSearch />
      </button>
      <input
        type="text"
        className="form-control input-search"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
    </div>
  );
};

export default Searcher;
