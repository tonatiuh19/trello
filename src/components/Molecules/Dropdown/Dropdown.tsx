import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = (props: any) => {
  return (
    <>
      <small className="text-muted">Task priority: </small>
      &nbsp;
      <select
        defaultValue={"DEFAULT"}
        className="btn btn-primary btn-sm"
        aria-label="Default select example"
        onChange={props.onChange}
      >
        <option value="DEFAULT" disabled>
          {" "}
          Action
        </option>
        <option value="">Everything</option>
        <option value="Highest">Highest</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
        <option value="Lowest">Lowest</option>
      </select>
    </>
  );
};

export default Dropdown;
