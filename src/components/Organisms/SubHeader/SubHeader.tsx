import React from "react";
import ItemInfo from "../../Molecules/ItemInfo/ItemInfo";
import { BiShareAlt } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { TbPencil } from "react-icons/tb";
import { AiOutlineCloudDownload } from "react-icons/ai";

const SubHeader = () => {
  return (
    <div className="container border-bottom pb-3">
      <div className="row">
        <div className="col">
          <h5>Overview</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <small className="text-muted">
            Edit or modify all card as you want
          </small>
        </div>
        <div className="col">
          <div className="float-end">
            <div className="container">
              <div className="row">
                <div className="col">
                  <ItemInfo
                    title="Edit"
                    onClick={() => console.log("Click")}
                    icon={<TbPencil />}
                    variant="sm"
                  />
                </div>
                <div className="col">
                  <ItemInfo
                    title="Filter"
                    onClick={() => console.log("Click")}
                    icon={<FiFilter />}
                    variant="sm"
                  />
                </div>
                <div className="col">
                  <ItemInfo
                    title="Share"
                    onClick={() => console.log("Click")}
                    icon={<BiShareAlt />}
                    variant="sm"
                  />
                </div>
                <div className="col">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <AiOutlineCloudDownload /> Export
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
