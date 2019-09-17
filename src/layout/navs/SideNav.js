// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { NavLink } from "react-router-dom";
import "./css/side-bar.css";
import { modulsURL } from "../../db";

const SideNav = () => {

  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <>
      <div className="logo">
        <div className="logo-item">
          <img src="/assets/img/logo.svg" className="img-fluid mx-auto" alt="Company Logo" />
        </div>
      </div>

      <ul className="sidebar-nav">
        <p className="ml-4">MENU</p>
        {modulsURL.map(x =>
          <li
            key={x.id}
            className="nav-item">
            <NavLink
              exact={true}
              activeClassName="is-active"
              className="nav-link"
              to={x.value}>
              <span className="icon-2x">
                <img src={`/assets/img/${x.icon}`} />
              </span>
              {x.label}
            </NavLink>
          </li>)}
        {/* <li className="nav-item">
          <span onClick={() => logout()} className="nav-link cursor-pointer">
            Logout
          </span>
        </li> */}
      </ul>

    </>
  );
};

export default SideNav;