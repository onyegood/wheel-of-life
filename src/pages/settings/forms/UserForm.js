import React from "react";
import { Form, Field } from "formik";
import { CustomInputComponent } from "../../../helpers/CustomInputComponent";
import { emailPattern } from "../../../helpers";

const UserForm = ({isSubmitting, roles}) => {
  return (
    <Form className="aut" >
      <div class="double d-flx j-c-sb border-bottom-small">
        <Field
          name="fname"
          title="First Name"
          // icon={textIcon}
          type="text"
          placeholder="First Name"
          component={CustomInputComponent}
        />
        <Field
          name="lname"
          title="Last Name"
          // icon={textIcon}
          type="text"
          placeholder="Last Name"
          component={CustomInputComponent}
        />
      </div>

      <h3 class="nanotext mt-1 capitalize">Contact</h3>
      <div class="double d-flx j-c-sb border-bottom-small">
        <Field
          name="phone"
          title="Phone"
          // icon={phoneIcon}
          type="text"
          placeholder="Phone"
          component={CustomInputComponent}
        />

        <Field
          name="email"
          title="email"
          type="email"
          // icon={envelopeIcon}
          pattern={emailPattern}
          placeholder="Email address"
          component={CustomInputComponent}
        />
      </div>

      <h3 class="nanotext mt-1 capitalize">security</h3>
      <div class="d-flx j-c-sb border-bottom-small">
        <div class="role input">
          <label for="">role </label>
          {/* {lockedIcon} */}
          <Field
            name="role"
            component="select">
            <option>[Select user role]</option>
            {roles.map((rol, i) => <option key={i + 1} value={rol._id}>{rol.label}</option>)}
          </Field>
        </div>
      </div>
      <div class="tx-c mt-2">
        <button disabled={isSubmitting} 
          className="dispatch-btn d-il btn-hover co-white bg-gradient fw-bold px-2 capitalize">
          <span className="ml-h">
            {isSubmitting ? <i className="fa fa-2x fa-spinner fa-spin" /> : "Save"}
          </span>
        </button>
      </div>
    </Form>
  );
};

export default UserForm;