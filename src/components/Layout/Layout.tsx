import React, { useEffect } from "react";
import LayoutProps from "../../interfaces/Layout.interface";
import ItemInfo from "../Molecules/ItemInfo/ItemInfo";
import ItemUser from "../Molecules/ItemUser/ItemUser";
import Header from "../Organisms/Header/Header";
import "./Layout.css";
import { AiOutlineInbox } from "react-icons/ai";
import CollapseMenu from "../Molecules/CollapseMenu/CollapseMenu";
import SubHeader from "../Organisms/SubHeader/SubHeader";

const Layout = ({ children, title }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <>
      <div className="sidebar border-end">
        <ItemUser />
        <ItemInfo
          notification="3"
          title="Inbox"
          onClick={() => console.log("Click")}
          icon={<AiOutlineInbox />}
        />
        <CollapseMenu title="Workspace">
          <ItemInfo
            title="Inbox"
            onClick={() => console.log("Click")}
            icon={<AiOutlineInbox />}
          />
          <ItemInfo
            title="Inbox"
            onClick={() => console.log("Click")}
            icon={<AiOutlineInbox />}
          />
        </CollapseMenu>
      </div>
      <div className="page">
        <div className="main">
          <Header />
          <div className="container px-5 pt-3">
            <div className="row">
              <div className="col">
                <SubHeader />
              </div>
            </div>
            <div className="row">
              <div className="col">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
