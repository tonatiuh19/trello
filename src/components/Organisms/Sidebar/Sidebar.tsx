import React, { useState } from "react";
import "./Sidebar.css";
import { AiOutlineInbox } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";
import { FiSettings, FiHash } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import CollapseMenu from "../../Molecules/CollapseMenu/CollapseMenu";
import ItemInfo from "../../Molecules/ItemInfo/ItemInfo";
import ItemUser from "../../Molecules/ItemUser/ItemUser";

const Sidebar = (props: any) => {
  const [workspaces, setWorkspaces] = useState([
    {
      id: 1,
      workspace: "Lyft Design",
    },
    {
      id: 2,
      workspace: "Marketing Site",
    },
    {
      id: 3,
      workspace: "Marketing Site",
    },
    {
      id: 4,
      workspace: "Stripe Payments",
    },
    {
      id: 5,
      workspace: "Xcode Studios",
    },
    {
      id: 6,
      workspace: "Conversion",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      project: "Revamp Tokopedia",
    },
    {
      id: 2,
      project: "Stripe Payments Gateway",
    },
    {
      id: 3,
      project: "Design System 4.8",
    },
  ]);

  return (
    <div className={props.theme ? "container container-dark" : "container"}>
      <div className="row">
        <div className="col py-3">
          <ItemUser />
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-12">
          <ItemInfo
            title="Inbox"
            onClick={() => console.log("Click")}
            icon={<AiOutlineInbox />}
          />
        </div>

        <div className="col-12">
          <ItemInfo
            notification="3"
            title="Updates"
            onClick={() => console.log("Click")}
            icon={<MdUpdate />}
          />
        </div>
        <div className="col-12">
          <ItemInfo
            title="Settings"
            onClick={() => console.log("Click")}
            icon={<FiSettings />}
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col border-top pt-2">
          <CollapseMenu title="Workspace">
            {workspaces.map((item) => {
              return (
                <ItemInfo
                  key={item.id}
                  title={item.workspace}
                  onClick={() => console.log("Click")}
                  icon={<HiOutlineDocumentReport />}
                  active={item.id === 4 ? true : false}
                />
              );
            })}
          </CollapseMenu>
        </div>
      </div>
      <div className="row my-3">
        <div className="col border-top pt-2">
          <CollapseMenu title="Project">
            {projects.map((item) => {
              return (
                <ItemInfo
                  key={item.id}
                  title={item.project}
                  onClick={() => console.log("Click")}
                  icon={<FiHash />}
                />
              );
            })}
          </CollapseMenu>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
