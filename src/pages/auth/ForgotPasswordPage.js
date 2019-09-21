import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../../history";
import { fetchCurrentUserRequest, forgotPasswordRequest } from "../../redux/actions/auth";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { clearMessage } from "../../redux/actions/message";
class ForgotPasswordPage extends Component {

    state = {
        data: {
            email: ""
        },
        error: {},
        isLoading: true,
        isProcessing: false,
        message: ''
    };

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.message !== undefined) {
            this.setState({ message: nextProps.message });
        }
        setTimeout(() => {
            toast(this.state.error.message, { type: toast.TYPE.ERROR });
            this.setState({ isProcessing: false });
        }, 500);
    }

    componentDidMount = () => {
        setTimeout(() => this.setState({ isLoading: false }), 2000);
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
            const payload = {
                email: this.state.data.email
            };
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
        if (!data.email)
            error.email = "Invalid email";
        return error;
    };
    render() {

        const { data, error, isLoading, isProcessing } = this.state;
        //const { loaded } = this.props;
        const page =
            <div className="bg-white is-sign-in">
                <main className="main" id="mainContent">
                    <div className="major-bg maxwidth-xxl mx-auto">
                        <section className="centered-box sign-in-wrapper auth-container">
                            <header className="logo-container mb-2h">
                                <img src="/assets/img/npower-logo.png" alt="npower-logo" />
                            </header>
                            <br />
                            <form onSubmit={this.onSubmit}
                                id="sign-in-form"
                                className="aut sign-in-form box-shad-padded bg-white">
                                <label class="form-label tx-c fw-bold mb-3 capitalize" for="sign-up-form">Forgot Password</label>
                                <p class="instruction">
                                    Please enter the same email address you used upon signup.
                            </p>
                                <div className="email input">
                                    <label for="">
                                        email address
                                </label>
                                    <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#999"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.8 5H19.2C20.19 5 21 5.81 21 6.8V17.6C21 18.59 20.19 19.4 19.2 19.4H4.8C3.81 19.4 3 18.59 3 17.6V6.8C3 5.81 3.81 5 4.8 5Z"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21 6.80005L12 13.1L3 6.80005" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                        value={data.email}
                                        onChange={this.onChange}
                                    />
                                    {error && error.email ?
                                        <p className="warning">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM7 7.9996H9V3.9996H7V7.9996ZM7 11.9996H9V9.9996H7V11.9996Z"
                                                    fill="#E7040F" />
                                            </svg><span className="co-warning nanotext">{error.email}</span>
                                        </p> : ''}
                                </div>

                                {isProcessing ?
                                    <span
                                        onClick={() => alert('Processing please wait...')}
                                        className="submit mb-1 mt-3 d-flx al-i-c j-c-c">
                                        <span className="ml-h">
                                            <i className="fa fa-spinner fa-spin" /> please wait...
                                    </span>
                                    </span>
                                    :
                                    <button className="submit mb-1 mt-3 d-flx al-i-c j-c-c">
                                        <svg width="20" height="20" viewBox="0 0 20 20"
                                            fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.16667 9.16667H15.8333C16.7538 9.16667 17.5 9.91286 17.5 10.8333V16.6667C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6667V10.8333C2.5 9.91286 3.24619 9.16667 4.16667 9.16667Z"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M14.1666 9.16667V5.83334C14.1677 4.80005 13.7847 3.80323 13.0921 3.03639C12.3996 2.26956 11.4468 1.78742 10.4187 1.68358C9.39064 1.57974 8.36067 1.86159 7.52873 2.47443C6.69679 3.08728 6.12224 3.98738 5.91662 5.00001"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg><span className="ml-h">
                                            Reset Password
                                    </span>
                                    </button>
                                }

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
    fetchCurrentUserRequest,
    submit: forgotPasswordRequest,
    clearMessage
}

export default connect(mapStateToProps, mapDispatchToState)(ForgotPasswordPage);
