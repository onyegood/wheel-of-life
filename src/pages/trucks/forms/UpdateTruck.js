import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { TruckValidation } from "../validator/TruckValidation";
import { clearMessage } from "../../../redux/actions/message";
import { updateUserRequest } from "../../../redux/actions/users";
import CompanyForm from "./CompanyForm";

const UpdateTruck = (props) => {
  const {values, isSubmitting, roles, message} = props;
  return (
  <>
  {message && message.message ? <p className="alert alert-danger">{message.message}</p> : null}
  <CompanyForm roles={roles} isSubmitting={isSubmitting} />
  </>
  );
};

const FormikConnect = withFormik({
  mapPropsToValues({ name }) {
    return {
      name: name || ""
    };
  },
  validationSchema: TruckValidation(),
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
    roles: state.roles.roles,
    message: state.message.message
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikConnect(UpdateTruck));