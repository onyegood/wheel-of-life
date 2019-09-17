import * as Yup from "yup";

export const ResetPasswordValidations = () => {
  return (
    Yup.object().shape({
      password: Yup.string().min(5, "Password must be at least 5 characters").required("Password is required"),
      confirmPassword: Yup.string().oneOf([Yup.ref("password", "")], "Password not matched")
    })
  );
};