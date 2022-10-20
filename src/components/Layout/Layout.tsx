import React, { useEffect, useState } from "react";
import Header from "../Organisms/Header/Header";
import "./Layout.css";
import SubHeader from "../Organisms/SubHeader/SubHeader";
import Sidebar from "../Organisms/Sidebar/Sidebar";

const Layout = (props: any) => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.title = props.title;
  });

  const getPriority = (e: any) => {
    props.onChange(e);
  };

  const getTheme = (e: any) => {
    setTheme(e);
    props.onChangeSelected(e);
  };

  return (
    <>
      <div
        className={
          theme
            ? "sidebar-wrapper-dark border-end text-white"
            : "sidebar-wrapper border-end"
        }
      >
        <Sidebar theme={theme} />
      </div>
      <div className="page-wrapper">
        <div
          className={theme ? "main-wrapper-dark text-white" : "main-wrapper"}
        >
          <Header onChange={getPriority} onChangeTheme={getTheme} />
          <div className="container px-5 pt-3">
            <div className="row">
              <div className="col">
                <SubHeader />
              </div>
            </div>
            <div className="row">
              <div className="col">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
