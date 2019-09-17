import React from "react";
import { Form, Field } from "formik";
import { CustomInputComponent } from "../../../helpers/CustomInputComponent";
import { emailPattern } from "../../../helpers";

const AppointmentForm = ({isSubmitting, roles}) => {
  return (
    <Form className="aut">
      <div className="row">
        <div className="col-md-4">
          <Field
            name="date"
            title="Date"
            type="date"
            placeholder="Date"
            component={CustomInputComponent}
          />

          <fieldset disabled="">
            <label className="mt-4">
              <b>Company</b>
            </label>
            <Field
              className="form-control"
              name="role"
              component="select">
              <option>Select company name</option>
              {/* {roles.map((rol, i) => <option key={i + 1} value={rol._id}>{rol.label}</option>)} */}
            </Field>
          </fieldset>

          <Field
            name="lname"
            title="Truck Registration Number"
            type="text"
            placeholder="Truck Registration Number"
            component={CustomInputComponent}
          />

          <Field
            name="phone"
            title="nominated pack departing from"
            type="text"
            placeholder="nominated pack departing from"
            component={CustomInputComponent}
          />

          <Field
            name="email"
            title="Transit pack arriving to"
            type="text"
            pattern={emailPattern}
            placeholder="Transit pack arriving to"
            component={CustomInputComponent}
          />

          <Field
            name="email"
            title="Transit pack arriving to"
            type="text"
            pattern={emailPattern}
            placeholder="Transit pack arriving to"
            component={CustomInputComponent}
          />

          <button disabled={isSubmitting} 
            className="mt-5 mb-5 btn-success-onye btn btn-success" >
            <span className="ml-h">
              {isSubmitting ? <i className="fa fa-2x fa-spinner fa-spin" /> : "NEXT"}
            </span>
          </button>
        </div>

        <div className="col-md-4 disabled-form">
          <Field
            name="date"
            title="Date"
            type="date"
            placeholder="Date"
            component={CustomInputComponent}
          />

          <fieldset disabled="">
            <label className="mt-4">
              <b>Company</b>
            </label>
            <Field
              className="form-control"
              name="role"
              component="select">
              <option>Select company name</option>
              {/* {roles.map((rol, i) => <option key={i + 1} value={rol._id}>{rol.label}</option>)} */}
            </Field>
          </fieldset>

          <Field
            name="lname"
            title="Truck Registration Number"
            type="text"
            placeholder="Truck Registration Number"
            component={CustomInputComponent}
          />

          <Field
            name="phone"
            title="nominated pack departing from"
            type="text"
            placeholder="nominated pack departing from"
            component={CustomInputComponent}
          />

          <Field
            name="email"
            title="Transit pack arriving to"
            type="text"
            pattern={emailPattern}
            placeholder="Transit pack arriving to"
            component={CustomInputComponent}
          />

          <Field
            name="email"
            title="Transit pack arriving to"
            type="text"
            pattern={emailPattern}
            placeholder="Transit pack arriving to"
            component={CustomInputComponent}
          />

          <button disabled={isSubmitting} 
            className="mt-5 mb-5 btn-success-onye btn btn-success" >
            <span className="ml-h">
              {isSubmitting ? <i className="fa fa-2x fa-spinner fa-spin" /> : "NEXT"}
            </span>
          </button>
        </div>

        <div className="col-md-4 disabled-form">
          <Field
            name="date"
            title="Date"
            type="date"
            placeholder="Date"
            component={CustomInputComponent}
          />

          <fieldset disabled="">
            <label className="mt-4">
              <b>Company</b>
            </label>
            <Field
              className="form-control"
              name="role"
              component="select">
              <option>Select company name</option>
              {/* {roles.map((rol, i) => <option key={i + 1} value={rol._id}>{rol.label}</option>)} */}
            </Field>
          </fieldset>

          <Field
            name="lname"
            title="Truck Registration Number"
            type="text"
            placeholder="Truck Registration Number"
            component={CustomInputComponent}
          />

          <Field
            name="phone"
            title="nominated pack departing from"
            type="text"
            placeholder="nominated pack departing from"
            component={CustomInputComponent}
          />

          <Field
            name="email"
            title="Transit pack arriving to"
            type="text"
            pattern={emailPattern}
            placeholder="Transit pack arriving to"
            component={CustomInputComponent}
          />

          <Field
            name="email"
            title="Transit pack arriving to"
            type="text"
            pattern={emailPattern}
            placeholder="Transit pack arriving to"
            component={CustomInputComponent}
          />

          <button disabled={isSubmitting} 
            className="mt-5 mb-5 btn-success-onye btn btn-success" >
            <span className="ml-h">
              {isSubmitting ? <i className="fa fa-2x fa-spinner fa-spin" /> : "Save"}
            </span>
          </button>
        </div>
      </div>
      
    </Form>
  );
};

export default AppointmentForm;