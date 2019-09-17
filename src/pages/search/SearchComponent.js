import React from "react";
import { Form, Field } from "formik";
import { CustomInputComponent } from "../../helpers/CustomInputComponent";

const SearchComponent = () => {
  return (
    <form>
      <input
        className="form-control ml-1"
        name="name"
        type="text"
        placeholder="Search here..." />
    </form>
  );
};

export default SearchComponent;