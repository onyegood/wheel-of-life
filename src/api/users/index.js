import axios from "axios";
import { newBase } from "../../base/nBase";
import { getUserId } from "../../utils/getUserId";

const users = async () => {
  const response = await axios.get(`${newBase}admins`);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const adminUser = async () => {
  const response = await axios.get(`${newBase}admin/${getUserId()}`);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const createUser = async payload => {
  const response = await axios.post(`${newBase}admin`, payload.payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const addUser = async payload => {
  const response = await axios.post(`${newBase}admin`, payload.user);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const updateUser = async payload => {
  const response = await axios.put(`${newBase}admin/${payload._id}`, payload.user);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const deleteUser = async payload => {
  const response = await axios.delete(`${newBase}admin/${payload._id}`, payload.user);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const updateCentreAdmin = async payload => {
  const response = await axios.put(`${newBase}centreadmins/${payload._id}`, payload.data);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};


const createNewCentreAdmin = async payload => {
  const response = await axios.post(`${newBase}centreadmins`, payload.data);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {
  users,
  adminUser,
  createUser,
  addUser,
  updateUser,
  deleteUser,
  updateCentreAdmin,
  createNewCentreAdmin
};