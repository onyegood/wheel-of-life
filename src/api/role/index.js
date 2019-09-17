import axios from "axios";
import { newBase } from "../../base/nBase";

const roles = async () => {
  const response = await axios.get(`${newBase}admin/roles`);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const addRole = async payload => {
  const response = await axios.post(`${newBase}admin/roles`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const updateRole = async (payload) => {
  const response = await axios.put(`${newBase}admin/roles/${payload._id}`, payload.role);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const deleteRole = async (id, payload) => {
  const response = await axios.delete(`${newBase}admin/roles/${id}`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {
  roles,
  addRole,
  updateRole,
  deleteRole
};