import React from "react";
import { connect } from "react-redux";
import { Formik, withFormik } from "formik";
import { AppointmentValidation } from "../validator/AppointmentValidation";
import { clearMessage } from "../../../redux/actions/message";
import { updateUserRequest } from "../../../redux/actions/users";
import AppointmentForm from "./AppointmentForm";

const CreateAppointment = (props) => {
  const {values, isSubmitting} = props;
  return (
  <>
  {/* {message && message.message ? <p className="alert alert-danger">{message.message}</p> : null} */}
    <AppointmentForm isSubmitting={isSubmitting} />
  </>
  );
};

const FormikConnect = withFormik({
  mapPropsToValues({ name }) {
    return {
      name: name || ""
    };
  },
  validationSchema: AppointmentValidation(),
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

export default connect(mapStateToProps, mapDispatchToProps)(FormikConnect(CreateAppointment));