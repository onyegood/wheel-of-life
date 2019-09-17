import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TopNav from "./navs/TopNav";
import SideNav from "./navs/SideNav";
import "./css/Layout.css";

const Layout = (props) => {

  const [toggle, setToggle] = useState("");

  const doToggle = () => {
    if (toggle) {
      setToggle("");
    } else {
      setToggle("menuDisplayed");
    }
  };

  return (
    <div id="wrapper" className={toggle}>
      <div id="sidebar-wrapper">
        <SideNav />
      </div>
      <div id="page-content-wrapper">
        <div id="top-menu-wrapper">
          <TopNav page={props.page} onClick={() => doToggle()} />
        </div>

        <div className={props.page ? "container-fluid main-content" : "main-content"}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;