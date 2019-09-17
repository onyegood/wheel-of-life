import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import history from "../../history";
import { changePasswordRequest } from "../../redux/actions/auth";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { clearMessage } from "../../redux/actions/message";
class ChangePasswordPage extends Component {

  state = {
    data: {
      password: "",
      confirm_password: ""
    },
    error: {},
    isLoading: true,
    isProcessing: false,
    message: '',
    _id: null
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.message !== undefined) {
      this.setState({ message: nextProps.message });
    }

    setTimeout(() => {
      toast(this.state.error.message, { type: toast.TYPE.ERROR });
    }, 500);
  }

  componentDidMount = () => {
    const token = this.props.match.params.token;
    //Decode token and get user id
    const decoded = jwtDecode(token);
    //Decode token and get user id
    setTimeout(() => this.setState({ isLoading: false, _id: decoded.id }), 2000);
  }

  onChange = e => this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: e.target.value
    }
  });

  onSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });
    const error = this.validate(this.state.data);
    this.setState({ error });
    if (Object.keys(error).length === 0) {
      const { data, _id } = this.state;
      const payload = {
        admin_id: _id,
        new_password: data.password
      }
      this.props.submit(payload);
      setTimeout(() => {
        if (this.props.message.success) {
          toast(this.props.message.payload, { type: toast.TYPE.SUCCESS });
          this.setState({ isProcessing: false });
          history.push("/login");
        } else {
          toast(this.props.message.payload, { type: toast.TYPE.ERROR });
          this.setState({ isProcessing: false });
        }
      }, 3000);
      setTimeout(() => {
        this.props.clearMessage();
      }, 4000);
    } else {
      this.setState({ isProcessing: false });
    }
  };

  validate = data => {
    const error = {};
    if (!data.password)
      error.password = "Password is required";
    if (!data.confirm_password)
      error.confirm_password = "Confirm password is required";
    else if (data.password !== data.confirm_password)
      error.confirm_password = "Password not match";
    return error;
  };
  render() {

    const { data, error, isLoading, isProcessing } = this.state;

    const page =
      <div className="bg-white is-sign-in">
        <main className="main" id="mainContent">
          <div className="major-bg maxwidth-xxl mx-auto">
            <section className="centered-box sign-in-wrapper auth-container">
              <header className="logo-container mb-2h">
                <img src="/assets/img/npower-logo.png" alt="npower-logo" />
              </header>
              <br />
              <form onSubmit={this.onSubmit} className="aut sign-in-form box-shad-padded bg-white">
                <label className="form-label tx-c fw-bold mb-3 capitalize" for="sign-up-form">
                  Create Password
                            </label>
                <div className="email input">
                  <label for="password"> New Password </label>
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2222 9H2.77778C1.79594 9 1 9.79594 1 10.7778V17C1 17.9818 1.79594 18.7778 2.77778 18.7778H15.2222C16.2041 18.7778 17 17.9818 17 17V10.7778C17 9.79594 16.2041 9 15.2222 9Z"
                      strokeWidth="2" strokeLnecap="round" strokeLinejoin="round" />
                    <path d="M4.55566 9V5.44444C4.55566 4.2657 5.02392 3.13524 5.85741 2.30175C6.69091 1.46825 7.82137 1 9.00011 1C10.1788 1 11.3093 1.46825 12.1428 2.30175C12.9763 3.13524 13.4446 4.2657 13.4446 5.44444V9"
                      strokeWidth="2" strokeLnecap="round" strokeLinejoin="round" />
                  </svg>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={this.onChange}
                    className={error.password
                      ? "form-control is-invalid"
                      : "form-control"} />
                  <div className="invalid-feedback">{error.password}</div>
                </div>

                <div className="password input my-0">
                  <label for="password"> Confirm Password </label>
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2222 9H2.77778C1.79594 9 1 9.79594 1 10.7778V17C1 17.9818 1.79594 18.7778 2.77778 18.7778H15.2222C16.2041 18.7778 17 17.9818 17 17V10.7778C17 9.79594 16.2041 9 15.2222 9Z"
                      strokeWidth="2" strokeLnecap="round" strokeLinejoin="round" />
                    <path d="M4.55566 9V5.44444C4.55566 4.2657 5.02392 3.13524 5.85741 2.30175C6.69091 1.46825 7.82137 1 9.00011 1C10.1788 1 11.3093 1.46825 12.1428 2.30175C12.9763 3.13524 13.4446 4.2657 13.4446 5.44444V9"
                      strokeWidth="2" strokeLnecap="round" strokeLinejoin="round" />
                  </svg>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={data.confirm_password}
                    onChange={this.onChange}
                    className={error.confirm_password
                      ? "form-control is-invalid"
                      : "form-control"} />
                  <div className="invalid-feedback">{error.confirm_password}</div>
                </div>


                {isProcessing ?
                  <span className="submit mb-1 mt-3 d-flx al-i-c j-c-c">
                    <i className="fa fa-spinner fa-spin" />
                    <span className="ml-h">Processing...</span>
                  </span> :

                  <button className="submit mb-1 mt-3 d-flx al-i-c j-c-c">
                    <svg width="20" height="20" viewBox="0 0 20 20"
                      fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16667 9.16667H15.8333C16.7538 9.16667 17.5 9.91286 17.5 10.8333V16.6667C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6667V10.8333C2.5 9.91286 3.24619 9.16667 4.16667 9.16667Z"
                        strokeWidth="2" strokeLnecap="round" strokeLinejoin="round" />
                      <path d="M14.1666 9.16667V5.83334C14.1677 4.80005 13.7847 3.80323 13.0921 3.03639C12.3996 2.26956 11.4468 1.78742 10.4187 1.68358C9.39064 1.57974 8.36067 1.86159 7.52873 2.47443C6.69679 3.08728 6.12224 3.98738 5.91662 5.00001"
                        strokeWidth="2" strokeLnecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-h">Submit</span>
                  </button>}

                <p class="option">
                  Have an account? <Link className="capitalize tx-r nanofont mt-h" to="/">Sign In</Link>
                </p>
              </form>
            </section>
            <footer className="aut-footer d-flx al-i-c">
              <p className="co-lightgray">
                © Copyright 2019 Softcom Limited. All rights reserved
                        </p>
            </footer>

          </div>
        </main>
      </div>

    return (
      <div>
        {page}
      </div>
    )
  }


};



function mapStateToProps(state) {
  return {
    error: state.auth.error,
    message: state.message
  }
}

const mapDispatchToState = {
  submit: changePasswordRequest,
  clearMessage
}

export default connect(mapStateToProps, mapDispatchToState)(ChangePasswordPage);
