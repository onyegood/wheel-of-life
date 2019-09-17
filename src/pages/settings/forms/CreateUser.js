import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { UserValidation } from "../validator/UserValidation";
import { clearMessage } from "../../../redux/actions/message";
import { createNewUserRequest } from "../../../redux/actions/users";
import UserForm from "./UserForm";

const CreateUser = (props) => {
  const {values, isSubmitting, roles, message} = props;
  
  return (
  <>
  {message && message.message ? <p className="alert alert-danger">{message.message}</p> : null}
    <Formik
      initialValues={values}
      validationSchema={UserValidation()}
      onSubmit={(values, {resetForm, setErrors, setSubmitting }) => {
        props.submit(values, values._id);
        resetForm();
        setSubmitting(false);
      }}
      render={() =>(
        <UserForm roles={roles} isSubmitting={isSubmitting} />
      )}
    />
  </>
  );
};

const mapDispatchToProps = {
  submit: createNewUserRequest,
  clearMessage
};

const mapStateToProps = state => {
  return {
    roles: state.roles.roles,
    message: state.message.message
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);