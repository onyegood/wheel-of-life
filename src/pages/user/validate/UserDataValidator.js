import * as Yup from "yup";
export const UserDataValidator = () => {
  return (
    Yup.object().shape({
      email: Yup.string().email("Invalid email, please provide a valid email.").required("Email is required"),
      name: Yup.string().min(5, "Full name must be at least 5 characters").required("Full name is required"),
      phone: Yup.number().min(11, "Full name must be at least 5 characters").required("Full name is required")
    })
  );
};