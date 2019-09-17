import React, { Component } from "react";
class CheckToken extends Component {
  componentDidMount = async () => {
    const token = localStorage.getItem("token");

    if (!token || token === null) {
      this.props.history.push("/login");
      return;
    }

    let response;

    try {
      response = "";
      // Call reset token endpont here
    } catch (error) {
      localStorage.removeItem("token");
      this.props.history.push("/login");
    }
    if (response) {
      const { refreshToken } = response.data;
      localStorage.setItem("token", refreshToken);
      this.props.history.push("/dashboard");
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return <div>loading...</div>;
  }
}

export default CheckToken;
