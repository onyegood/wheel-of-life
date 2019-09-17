import * as Yup from "yup";

export const RoleValidation = () => {
  return (
    Yup.object().shape({
      label: Yup.string().required("Role is required"),
      permissions:  Yup.array().of(Yup.string().required("Entering a first name is required"))
    })
  );
};