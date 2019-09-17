import * as Yup from "yup";

export const UserValidation = () => {
  return (
    Yup.object().shape({
      email: Yup.string().email("Invalid email, please provide a valid email.").required("Email is required"),
      fname: Yup.string().max(255).required("First name is required"),
      lname: Yup.string().max(255).required("Last name is required"),
      phone: Yup.number().required("Phone is required"),
      role: Yup.string().required("Role is required")
    })
  );
};