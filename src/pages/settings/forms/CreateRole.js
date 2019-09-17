import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { clearMessage } from "../../../redux/actions/message";
import { addRoleRequest } from "../../../redux/actions/roles";
import RoleForm from "./RoleForm";
import { RoleValidation } from "../validator/RoleValidation";

const CreateRole = (props) => {
  const {values, isSubmitting, message, selectedOption} = props;
  return (
  <>
  {message && message.message ? <p className="alert alert-danger">{message.message}</p> : null}
    <Formik
      initialValues={values}
      validationSchema={RoleValidation()}
      onSubmit={(values, {resetForm, setErrors, setSubmitting }) => {
        if (selectedOption) {
          props.submit({
            label: values.label, 
            permissions: selectedOption.map(a => a.label)
          });
          resetForm();
          setSubmitting(false);
        }
      }}
      render={() =>(
        <RoleForm 
          selectedOption={props.selectedOption}
          fieldSets={props.fieldSets}
          handleChange={props.handleChange}
          isSubmitting={isSubmitting} 
        />
      )}
    />
  </>
  );
};

const mapDispatchToProps = {
  submit: addRoleRequest,
  clearMessage
};

const mapStateToProps = state => {
  return {
    roles: state.roles.roles,
    message: state.message.message
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRole);