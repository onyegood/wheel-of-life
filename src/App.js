import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { fetchCurrentUserRequest, logoutUserRequest } from "./redux/actions/auth";
import Routes from "./routes";

class App extends Component {

  componentDidMount = () => {
    if (this.props.isAuthenticated)
      this.props.fetchCurrentUserRequest();

    //   let deferredPrompt;

    // btnAdd.addEventListener("click", (e) => {
    //   deferredPrompt.prompt();

    //   deferredPrompt.userChose.then((chooseResult) => {
    //     if (chooseResult.outcome === "accepted") {
    //       console.log("User accepted to install");
    //     }

    //     deferredPrompt = null;
    //   });
    // });

    // window.addEventListener("beforeinstallprompt", (e) => {

    //   e.preventDefault();

    //   deferredPrompt = e;

    //   btnAdd.style.display = "block";

    // });

    // window.addEventListener("appinstalled", (evt) => {
    //   app.logEvent("a2hs", "installed");
    // });


  }

  render() {
    return <Routes />;
  }
}

App.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  fetchCurrentUserRequest: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!localStorage.token,
    auth: state.auth
  };
}

const mapDispatchToProps = {
  fetchCurrentUserRequest,
  logout: logoutUserRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(App);