import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import { fetchCurrentUserRequest, loginUserRequests } from "../../redux/actions/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { clearMessage } from "../../redux/actions/message";
import { CustomInputComponent } from "../../helpers/CustomInputComponent";
import { LoginValidations } from "./validator/LoginValidations";
import { emailPattern } from "../../helpers";

const LoginPage = (props) => {
  const { isSubmitting, message } = props;

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="auth-page">
          <div className="row">
            <div className="col-lg-5">
              <div className="card p-3 mt-2">
                <div className="card-body">
                  {message && message.message ? <p className="alert alert-danger">{message.message}</p> : null}

                  <Form
                    id="sign-in-form"
                    className="aut sign-in-form box-shad-padded bg-white">
                    <label className="mb-5" for="sign-up-form">
                      <img src="/assets/img/logo.svg" />
                    </label>

                    <Field
                      name="email"
                      title="Email"
                      type="email"
                      pattern={emailPattern}
                      placeholder="Email address"
                      component={CustomInputComponent}
                    />

                    <Field
                      name="password"
                      title="Password"
                      type="password"
                      placeholder="Password"
                      component={CustomInputComponent}
                    />

                    <Link to="/">
                        forgot password ?
                    </Link>

                    <button disabled={isSubmitting} className="mt-5 mb-5 btn-success-onye btn btn-success btn-block">
                      {isSubmitting ? <i className="fa fa-2x fa-spinner fa-spin" /> : "Sign in"}
                    </button>
                  </Form>
                </div>
              </div>

            </div>
            <div className="col-lg-7">
              <img src="/assets/img/bg.png" className="img-fluid" />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message
  };
};

const mapDispatchToState = {
  fetchCurrentUserRequest,
  clearMessage,
  submit: loginUserRequests
};

const FormikConnect = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "goodnews@softcom.ng",
      password: password || "password"
    };
  },
  validationSchema: LoginValidations(),
  handleSubmit: async (values, { props, resetForm, setErrors, setSubmitting }) => {
    props.submit(values);
    setTimeout(() => {
      props.clearMessage();
      resetForm();
      setSubmitting(false);
    }, 500);

    
  }
});

export default connect(mapStateToProps, mapDispatchToState)(FormikConnect(LoginPage));