import React from "react";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailed,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailed,
  createNewUserRequest,
  createNewUserSuccess,
  createNewUserFailed,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  deleteuser,
  deleteUserSuccess,
  deleteUserFailure
} from "../../../src/redux/actions/users";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAILED
} from "../../../src/redux/types/users";
import { users } from "../../data";

let user, error, success;

beforeEach(() => {
  user = {
    email: users[0].email,
    password: users[0].password
  },
  error = {
    success: false,
    message: "OOps!, some thing went wrong!"
  };
  success = {
    success: true, 
    message: "Success"
  };
});

describe("User Action", () => {
  describe("Create new user", () => {
    it("should call addUserRequest method with user data", () => {
      const wrapper = addUserRequest(users[0]);
      expect(wrapper).toEqual({
        type: ADD_USER_REQUEST,
        payload: users[0]
      });
    });

    it("should call addUserSuccess method with create new user and return success", () => {
      const wrapper = addUserSuccess(success);
      expect(wrapper).toEqual({
        type: ADD_USER_SUCCESS,
        payload: success
      });
    });

    it("should call addUserFailure method and return error", () => {
      const wrapper = addUserFailure(error);
      expect(wrapper).toEqual({
        type: ADD_USER_FAILURE,
        payload: error
      });
    });
  });

  describe("Update user", () => {
    it("should call updateUserRequest method with user data", () => {
      const wrapper = updateUserRequest(users[0]);
      expect(wrapper).toEqual({
        type: UPDATE_USER_REQUEST,
        payload: users[0]
      });
    });

    it("should call updateUserSuccess method with create new user and return success", () => {
      const wrapper = updateUserSuccess(success);
      expect(wrapper).toEqual({
        type: UPDATE_USER_SUCCESS,
        payload: success
      });
    });

    it("should call updateUserFailure method and return error", () => {
      const wrapper = updateUserFailure(error);
      expect(wrapper).toEqual({
        type: UPDATE_USER_FAILURE,
        payload: error
      });
    });
  });

  describe("Delete user", () => {
    it("should call deleteuser method with user id", () => {
      const wrapper = deleteuser(users[0]._id);
      expect(wrapper).toEqual({
        type: DELETE_USER_REQUEST,
        payload: users[0]._id
      });
    });

    it("should call updateUserSuccess method with create new user and return success", () => {
      const wrapper = deleteUserSuccess(success);
      expect(wrapper).toEqual({
        type: DELETE_USER_SUCCESS,
        payload: success
      });
    });

    it("should call deleteUserFailure method and return error", () => {
      const wrapper = deleteUserFailure(error);
      expect(wrapper).toEqual({
        type: DELETE_USER_FAILURE,
        payload: error
      });
    });
  });

  describe("Create New User", () => {
    it("should call createNewUserRequest method with user id", () => {
      const wrapper = createNewUserRequest(users[0]);
      expect(wrapper).toEqual({
        type: CREATE_NEW_USER_REQUEST,
        payload: users[0]
      });
    });

    it("should call createNewUserSuccess method with create new user and return success", () => {
      const wrapper = createNewUserSuccess(success);
      expect(wrapper).toEqual({
        type: CREATE_NEW_USER_SUCCESS,
        payload: success
      });
    });

    it("should call createNewUserFailed method and return error", () => {
      const wrapper = createNewUserFailed(error);
      expect(wrapper).toEqual({
        type: CREATE_NEW_USER_FAILED,
        payload: error
      });
    });
  });

  describe("Create New User", () => {
    it("should call createNewUserRequest method with user id", () => {
      const wrapper = createNewUserRequest(users[0]);
      expect(wrapper).toEqual({
        type: CREATE_NEW_USER_REQUEST,
        payload: users[0]
      });
    });

    it("should call createNewUserSuccess method with create new user and return success", () => {
      const wrapper = createNewUserSuccess(success);
      expect(wrapper).toEqual({
        type: CREATE_NEW_USER_SUCCESS,
        payload: success
      });
    });

    it("should call createNewUserFailed method and return error", () => {
      const wrapper = createNewUserFailed(error);
      expect(wrapper).toEqual({
        type: CREATE_NEW_USER_FAILED,
        payload: error
      });
    });
  });

  describe("Fetch All User", () => {
    it("should call fetchUserRequest method", () => {
      const wrapper = fetchUsersRequest(users);
      expect(wrapper).toEqual({
        type: FETCH_USERS_REQUEST,
        payload: users
      });
    });

    it("should call createNewUserSuccess method return users", () => {
      const wrapper = fetchUsersSuccess(users);
      expect(wrapper).toEqual({
        type: FETCH_USERS_SUCCESS,
        payload: users
      });
    });

    it("should call fetchUsersFailed method and return error", () => {
      const wrapper = fetchUsersFailed(error);
      expect(wrapper).toEqual({
        type: FETCH_USERS_FAILED,
        payload: error
      });
    });
  });

  describe("Fetch User", () => {
    it("should call fetchUserRequest method with user id", () => {
      const wrapper = fetchUserRequest(users[0]);
      expect(wrapper).toEqual({
        type: FETCH_USER_REQUEST,
        payload: users[0]
      });
    });

    it("should call fetchUserSuccess method return user", () => {
      const wrapper = fetchUserSuccess(users[0]);
      expect(wrapper).toEqual({
        type: FETCH_USER_SUCCESS,
        payload: users[0]
      });
    });

    it("should call fetchUserFailed method and return error", () => {
      const wrapper = fetchUserFailed(error);
      expect(wrapper).toEqual({
        type: FETCH_USER_FAILED,
        payload: error
      });
    });
  });
});

