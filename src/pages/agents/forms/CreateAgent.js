import React from "react";
import { connect } from "react-redux";
import { Formik, withFormik } from "formik";
import { AgentValidation } from "../validator/AgentValidation";
import { clearMessage } from "../../../redux/actions/message";
import { updateUserRequest } from "../../../redux/actions/users";
import AgentForm from "./AgentForm";

const CreateAgent = (props) => {
  return (
  <>
  {/* {message && message.message ? <p className="alert alert-danger">{message.message}</p> : null} */}
    <AgentForm {...props} />
  </>
  );
};

const FormikConnect = withFormik({
  mapPropsToValues({ name }) {
    return {
      name: name || ""
    };
  },
  validationSchema: AgentValidation(),
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

export default connect(mapStateToProps, mapDispatchToProps)(FormikConnect(CreateAgent));