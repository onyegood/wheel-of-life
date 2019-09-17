
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./css/top-menu.css";
import history from "../../history";
import { logoutUserRequest } from "../../redux/actions/auth";

const TopNav = (props) => {

  const {fname, profile_picture, lname} = props.auth;
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        className="navbar-brand"
        to="#">
        {props.page}
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <i className="ion-ios-notifications-outline icon-small" />
            </Link>
          </li>

          {!fname || !lname || !profile_picture ? <p className="nav-link">loading...</p> :
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" 
                data-toggle="dropdown" 
                to="#" 
                role="button" 
                aria-haspopup="true" 
                aria-expanded="false">
                <b>{fname +" "+lname} &nbsp;</b> 
                <img
                  src={profile_picture ? profile_picture : "/assets/img/avatar.jpeg"}
                  alt={fname + " " + lname}
                />
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/profile">Profile</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#" onClick={() => props.logoutUserRequest()}>Logout</Link>
              </div>
            </li>
          }
        </ul>
      </div>
    </nav>
  );
};

const mapDispatchToProps = {
  logoutUserRequest
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);