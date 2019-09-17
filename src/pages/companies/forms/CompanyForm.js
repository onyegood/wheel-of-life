import React from "react";
import { Form, Field } from "formik";
import { CustomInputComponent } from "../../../helpers/CustomInputComponent";
import { emailPattern } from "../../../helpers";

const CompanyForm = ({ isSubmitting, onModaleClose }) => {
  return (
    <Form className="p-4">
      <div className="row">
        <div className="col-md-6">
          <Field
            name="name"
            title="Company Name"
            type="text"
            placeholder="Company Name"
            component={CustomInputComponent}
          />
        </div>

        <div className="col-md-6">
          <Field
            name="address"
            title="Address"
            type="text"
            placeholder="Address"
            component={CustomInputComponent}
          />
        </div>

        <div className="col-md-6">
          <Field
            name="phone"
            title="Phone number"
            type="text"
            placeholder="Phone number"
            component={CustomInputComponent}
          />
        </div>

        <div className="col-md-6">
          <Field
            name="contactperson"
            title="Contact person"
            type="text"
            placeholder="Contact person"
            component={CustomInputComponent}
          />
        </div>

        <div className="col-md-6">
          <Field
            name="rcnumber"
            title="RC Number"
            type="text"
            placeholder="RC Number"
            component={CustomInputComponent}
          />
        </div>

        <div className="col-md-6">
          <Field
            name="email"
            title="Email"
            type="text"
            pattern={emailPattern}
            placeholder="Email"
            component={CustomInputComponent}
          />
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

export default CompanyForm;