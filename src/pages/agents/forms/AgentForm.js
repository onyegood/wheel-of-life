import React from "react";
import { Form, Field } from "formik";
import { CustomInputComponent } from "../../../helpers/CustomInputComponent";
import { emailPattern } from "../../../helpers";

const AgentForm = ({ isSubmitting, onModaleClose }) => {
  return (
    <Form className="p-4">
      <div className="row">
        <div className="col-md-6">
          <fieldset disabled="">
            <label className="mt-4">
              <b>Truck type</b>
            </label>
            <Field
              className="form-control"
              name="role"
              component="select">
              <option>Select truck type</option>
              {/* {roles.map((rol, i) => <option key={i + 1} value={rol._id}>{rol.label}</option>)} */}
            </Field>
          </fieldset>
        </div>

        <div className="col-md-6">
          <fieldset disabled="">
            <label className="mt-4">
              <b>Company type</b>
            </label>
            <Field
              className="form-control"
              name="role"
              component="select">
              <option>Select company type</option>
              {/* {roles.map((rol, i) => <option key={i + 1} value={rol._id}>{rol.label}</option>)} */}
            </Field>
          </fieldset>
        </div>

        <div className="col-md-6">
          <Field
            name="name"
            title="Plate Number"
            type="text"
            placeholder="Plate Number"
            component={CustomInputComponent}
          />
        </div>

        <div className="col-md-6">
          <Field
            name="phone"
            title="Driver Name"
            type="text"
            placeholder="Driver Name"
            component={CustomInputComponent}
          />
        </div>

        <div className="col-md-6">
          <Field
            name="phone"
            title="Phone Number"
            type="text"
            placeholder="Phone Number"
            component={CustomInputComponent}
          />
        </div>

        <div className="col-md-12">
          <button disabled={isSubmitting} 
            className="btn mt-5 mb-5 btn-success-onye text-white mr-3" >
            <span className="ml-h">
              {isSubmitting ? <i className="fa fa-2x fa-spinner fa-spin" /> : "SAVE"}
            </span>
          </button>

          <button disabled={isSubmitting} 
            onClick={() => onModaleClose()}
            className="btn mt-5 mb-5 btn-danger">
            Close
          </button>
        </div>
      </div>
      
    </Form>
  );
};

export default AgentForm;