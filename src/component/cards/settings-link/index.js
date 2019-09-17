import React from "react";
import { NavLink } from "react-router-dom";
import "./css/SettingsLink.css";
const SettingsLink = ({ title, active, link_to, class_name }) => {
  return (
    <div className={`${class_name}`}>
      <div className="card-style">
        <NavLink
          exact={true}
          activeClassName="is-active"
          className="nav-link"
          to={link_to}>
          <div className={active ? "card text-center active-background" : "card text-center"}>
            <div className="card-body">
              <h5><i className="ion-ios-cog" /> {title}</h5>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

SettingsLink.defaultProps = {
  title: "title",
  count: 0,
  link_to: "/dashboard",
  class_name: "col-md-3",
};
export default SettingsLink;