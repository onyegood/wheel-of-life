import React from "react";
import {
  userLoggedIn,
  userLoggedOut,
  loginUserRequests,
  loginUserFailure,
  logoutUserRequest,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
  userAvatarUploadRequest,
  userAvatarUploadSuccess,
  userAvatarUploadFailure,
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure
} from "../../../src/redux/actions/auth";
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  LOGOUT_USER_REQUEST,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILURE,
  USER_AVATAR_UPLOAD_REQUEST,
  USER_AVATAR_UPLOAD_SUCCESS,
  USER_AVATAR_UPLOAD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE
} from "../../../src/redux/types/auth";
import { users } from "../../data";

let user, error, resetPassword, success, payload;

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
  payload = {
    "token": "hekkooo",
    "@r": "ggdjjjdjd1234"
  };
  resetPassword = {
    password: "password",
    _id: "123"
  };

});


describe("Auth Action", () => {
  describe("Login in user", () => {
    it("should call userLoggedIn method with email and password", () => {
      const wrapper = userLoggedIn(user);
      expect(wrapper).toEqual({
        type: USER_LOGGED_IN,
        payload: user
      });
    });

    it("should call loginUserRequests method and log valid user in", () => {
      const wrapper = loginUserRequests(user);
      expect(wrapper).toEqual({
        type: LOGIN_USER_REQUEST,
        payload: user
      });
    });

    it("should userLoginFailed mathod and return error message", () => {
      const wrapper = loginUserFailure(error);
      expect(wrapper).toEqual({
        type: LOGIN_USER_FAIL,
        payload: error
      });
    });
  });

  describe("Current user", () => {
    it("shoul call fetchCurrentUserRequest method with success responnse and return current user", () => {
      const wrapper = fetchCurrentUserRequest(user);
      expect(wrapper).toEqual({
        type: FETCH_CURRENT_USER_REQUEST
      });
    });

    it("shoul call forgotPasswordSuccess method with success response and return current user", () => {
      const wrapper = fetchCurrentUserSuccess(user);
      expect(wrapper).toEqual({
        type: FETCH_CURRENT_USER_SUCCESS,
        payload: user
      });
    });

    it("shoul call fetchCurrentUserFailure method with error response", () => {
      const wrapper = fetchCurrentUserFailure(error);
      expect(wrapper).toEqual({
        type: FETCH_CURRENT_USER_FAILURE,
        payload: error
      });
    });
  });

  describe("Logout user", () => {
    it("should call userLoggedOut method", () => {
      const wrapper = userLoggedOut();
      expect(wrapper).toEqual({
        type: USER_LOGGED_OUT
      });
    });

    it("should call logoutUserRequest method and set delete token and role from localStorage", () => {
      const wrapper = logoutUserRequest(payload);
      expect(wrapper).toEqual({
        type: LOGOUT_USER_REQUEST,
        payload: payload
      });
    });
  });

  describe("Forgot Password", () => {
    it("should call forgotPasswordRequest method", () => {
      const wrapper = forgotPasswordRequest(user.email);
      expect(wrapper).toEqual({
        type: FORGOT_PASSWORD_REQUEST,
        payload: user.email
      });
    });

    it("should call forgotPasswordSuccess method and return success: true, message: 'Check your mail' ", () => {
      const wrapper = forgotPasswordSuccess(success);
      expect(wrapper).toEqual({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: success
      });
    });

    it("should call forgotPasswordFailure method and return success: true, message: 'Oops, something went wrong...' ", () => {
      const wrapper = forgotPasswordFailure(error);
      expect(wrapper).toEqual({
        type: FORGOT_PASSWORD_FAILURE,
        payload: error
      });
    });
  });


  describe("Rest Password", () => {
    it("should call resetPasswordRequest method", () => {
      const wrapper = resetPasswordRequest(resetPassword);
      expect(wrapper).toEqual({
        type: RESET_PASSWORD_REQUEST,
        payload: resetPassword
      });
    });

    it("should call resetPasswordSuccess method and return success: true, message: 'Success' ", () => {
      const wrapper = resetPasswordSuccess(success);
      expect(wrapper).toEqual({
        type: RESET_PASSWORD_SUCCESS,
        payload: success
      });
    });

    it("should call resetPasswordFailure method and return success: true, message: 'Oops, something went wrong...' ", () => {
      const wrapper = resetPasswordFailure(error);
      expect(wrapper).toEqual({
        type: RESET_PASSWORD_FAILURE,
        payload: error
      });
    });
  });

  describe("Change Password", () => {
    it("should call changePasswordRequest method", () => {
      const wrapper = changePasswordRequest(resetPassword);
      expect(wrapper).toEqual({
        type: CHANGE_PASSWORD_REQUEST,
        payload: resetPassword
      });
    });

    it("should call changePasswordSuccess method and return success: true, message: 'Success' ", () => {
      const wrapper = changePasswordSuccess(success);
      expect(wrapper).toEqual({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: success
      });
    });

    it("should call changePasswordFailure method and return success: true, message: 'Oops, something went wrong...' ", () => {
      const wrapper = changePasswordFailure(error);
      expect(wrapper).toEqual({
        type: CHANGE_PASSWORD_FAILURE,
        payload: error
      });
    });
  });

  describe("Change Profile Image", () => {
    it("should call userAvatarUploadRequest method", () => {
      const wrapper = userAvatarUploadRequest(user.profilePicture);
      expect(wrapper).toEqual({
        type: USER_AVATAR_UPLOAD_REQUEST,
        payload: user.profilePicture
      });
    });

    it("should call userAvatarUploadSuccess method and return success: true, message: 'Success' ", () => {
      const wrapper = userAvatarUploadSuccess(success);
      expect(wrapper).toEqual({
        type: USER_AVATAR_UPLOAD_SUCCESS,
        payload: success
      });
    });

    it("should call userAvatarUploadFailure method and return success: true, message: 'Oops, something went wrong...' ", () => {
      const wrapper = userAvatarUploadFailure(error);
      expect(wrapper).toEqual({
        type: USER_AVATAR_UPLOAD_FAILURE,
        payload: error
      });
    });
  });
});

