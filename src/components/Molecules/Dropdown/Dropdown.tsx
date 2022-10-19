import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="btn-group">
      <small className="text-muted">Task priority: </small>
      &nbsp;
      <button
        type="button"
        className="btn btn-primary btn-sm dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Action
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Separated link
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
