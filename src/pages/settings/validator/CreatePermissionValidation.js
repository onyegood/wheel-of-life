import * as Yup from "yup";

export const CreatePermissionValidation = () => {
  return (
    Yup.object().shape({
      label: Yup.string().required("Permission is required")
    })
  );
};