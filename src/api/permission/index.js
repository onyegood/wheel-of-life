import axios from "axios";
import { newBase } from "../../base/nBase";

const permissions = async () => {
  const response = await axios.get(`${newBase}admin/permissions`);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const addPermission = async payload => {
  const response = await axios.post(`${newBase}admin/permissions`, payload.permission);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const updatePermission = async payload => {
  const response = await axios.put(`${newBase}admin/permissions/${payload._id}`, payload.permission);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const deletePermission = async payload => {
  const response = await axios.delete(`${newBase}admin/permissions/${payload._id}`);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {
  permissions,
  addPermission,
  updatePermission,
  deletePermission
};