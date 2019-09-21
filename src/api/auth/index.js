import axios from "axios";
import { newBase } from "../../base/nBase";
import { getUserId } from "../../utils/getUserId";

const login = async payload => {
  const response = await axios.post(`${newBase}admin/login`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const signup = async payload => {
  const response = await axios.post(`${newBase}admin/signup`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const changePassword = async payload => {
  const response = await axios.post(`${newBase}admin/forgotAdminPassword`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const resetPassword = async payload => {
  const response = await axios.post(`${newBase}admin/resetAdminPassword`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const forgotPassword = async payload => {
  const response = await axios.post(`${newBase}admin/forgotAdminPassword`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const uploadAvatar = async payload => {
  const response = await axios.post(`admin/uploadprofile/${getUserId()}`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const currentUser = async () => {
  const response = await axios.get(`${newBase}admin/${getUserId()}`);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {
  currentUser,
  login,
  signup,
  uploadAvatar,
  changePassword,
  resetPassword,
  forgotPassword
};