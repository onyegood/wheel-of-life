import decoder from "jwt-decode";

export const getUserId = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const decoded = decoder(token);
  return decoded._id;
};