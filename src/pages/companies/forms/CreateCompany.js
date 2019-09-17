import React from "react";
import { connect } from "react-redux";
import { Formik, withFormik } from "formik";
import { CompanyValidation } from "../validator/CompanyValidation";
import { clearMessage } from "../../../redux/actions/message";
import { updateUserRequest } from "../../../redux/actions/users";
import CompanyForm from "./CompanyForm";

const CreateCompany = (props) => {
  return (
  <>
  {/* {message && message.message ? <p className="alert alert-danger">{message.message}</p> : null} */}
    <CompanyForm {...props} />
  </>
  );
};

const FormikConnect = withFormik({
  mapPropsToValues({ name }) {
    return {
      name: name || ""
    };
  },
  validationSchema: CompanyValidation(),
  handleSubmit: async ({ name }, { props, resetForm, setErrors, setSubmitting }) => {
    props.submit(name);
    resetForm();
    setSubmitting(false);
  }
});

const mapDispatchToProps = {
  submit: updateUserRequest,
  clearMessage
};

const mapStateToProps = state => {
  return {
    // roles: state.roles.roles,
    // message: state.message.message
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikConnect(CreateCompany));