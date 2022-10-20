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
                <div className="col-3">
                  <ItemInfo
                    title="Edit"
                    onClick={() => console.log("Click")}
                    icon={<TbPencil />}
                    variant="sm"
                  />
                </div>
                <div className="col-3">
                  <ItemInfo
                    title="Filter"
                    onClick={() => console.log("Click")}
                    icon={<FiFilter />}
                    variant="sm"
                  />
                </div>
                <div className="col-4">
                  <ItemInfo
                    title="Share"
                    onClick={() => console.log("Click")}
                    icon={<BiShareAlt />}
                    variant="sm"
                  />
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                  >
                    <AiOutlineCloudDownload /> Export
                  </button>
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
