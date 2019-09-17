import React from "react";
import { Form, Field } from "formik";
import Select from "react-select";
// import { textIcon, lockedIcon } from "../../../components/includes/db/svgIcons";
import { CustomInputComponent } from "../../../helpers/CustomInputComponent";

const RoleForm = ({values, isSubmitting, selectedOption, fieldSets, handleChange}) => {
  console.log(values);
  return (
    <Form className="aut">
      <div class="double d-flx j-c-sb border-bottom-small">
        <Field
          name="label"
          title="Name"
          // icon={textIcon}
          type="text"
          placeholder="Name"
          component={CustomInputComponent}
        />
      </div>
      <h3 class="nanotext mt-1 capitalize">security</h3>
      <div class="d-flx j-c-sb border-bottom-small">
        <div class="role input">
          <label for="">role </label>
          {/* {lockedIcon} */}
          <Select
            onChange={handleChange}
            component="select"
            name="permissions"
            value={selectedOption}
            isMulti
            options={fieldSets} />
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

export default RoleForm;