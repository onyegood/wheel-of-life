import React from "react";
import authReducer from "../../../src/redux/reducer/auth";
import { users } from "../../data";
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOGOUT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_REQUEST,
  USER_AVATAR_UPLOAD_REQUEST,
  USER_AVATAR_UPLOAD_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_FAILURE
} from "../../../src/redux/types/auth";

const INIT_STATE = {
  auth: null,
  error: null,
  loaded: false
};

describe("Auth Reducer", () => {
  it("should set default state to empty for all fields", () => {
    const state = authReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual(INIT_STATE);
  });

  describe("User login", () => {
    it("should call LOGIN_USER_REQUEST with null as payload and set loaded to true", () => {
      const action = {
        type: LOGIN_USER_REQUEST
      };

      const response = authReducer(null, action);

      expect(response.loaded).toEqual(true);
    });

    it("should call USER_LOGGED_IN with user payload and set loaded to false", () => {
      const payload = {
        auth: {
          email: "test@yahoo.com",
          password: "password"
        }
      };
      const action = {
        type: USER_LOGGED_IN,
        payload
      };

      const response = authReducer(payload, action);

      expect(response.loaded).toEqual(false);
    });

    it("should call LOGIN_USER_FAIL with null as payload and set loaded to true", () => {
      const payload = {
        auth: {
          email: "test@yahoo.com",
          password: "password"
        }
      };

      const action = {
        type: LOGIN_USER_FAIL,
        payload
      };

      const response = authReducer(null, action);

      expect(response.loaded).toEqual(false);
    });
  });


  describe("Fetch Current User", () => {
    it("should call FETCH_CURRENT_USER_REQUEST with null as payload and set loaded: true", () => {

      const action = {
        type: FETCH_CURRENT_USER_REQUEST
      };

      const response = authReducer(null, action);

      expect(response.loaded).toEqual(true);

    });

    it("should call FETCH_CURRENT_USER_SUCCESS return user payload and set loaded: false", () => {

      const payload = {
        auth: users[0]
      };
      const action = {
        type: FETCH_CURRENT_USER_SUCCESS,
        payload: payload
      };

      const response = authReducer(payload, action);

      expect(response.loaded).toEqual(false);
    });
  });

  describe("User Logout", () => {
    it("should call USER_LOGOUT_REQUEST with null as payload and set loaded: true", () => {

      const action = {
        type: LOGOUT_USER_REQUEST
      };

      const response = authReducer(null, action);

      expect(response.loaded).toEqual(true);
    });

    it("should call USER_LOGGED_OUT with null as paylod, remove token from localStorage and set loaded: false", () => {

      const action = {
        type: USER_LOGGED_OUT
      };

      const response = authReducer(null, action);

      expect(response.loaded).toEqual(false);
      expect(response.auth).toEqual(null);
    });
  });


  describe("Change Profile Image", () => {
    it("should call USER_AVATAR_UPLOAD_REQUEST with null as payload and set loaded: true", () => {
      const payload = {
        profile_picture: "abc.png"
      };

      const action = {
        type: USER_AVATAR_UPLOAD_REQUEST,
        payload
      };

      const response = authReducer(payload, action);

      expect(response.loaded).toEqual(true);
    });

    it("should call USER_AVATAR_UPLOAD_SUCCESS", () => {
      const payload = {
        profile_picture: "abc.png"
      };
      const action = {
        type: USER_AVATAR_UPLOAD_SUCCESS,
        payload
      };

      const response = authReducer(payload, action);

      expect(response.loaded).toEqual(false);
    });
  });

  describe("Create User", () => {
    it("should call CREATE_USER_REQUEST with null as payload and set loaded: true", () => {
      const payload = {
        ...INIT_STATE,
        loaded: true
      };

      const action = {
        type:  CREATE_USER_REQUEST,
        payload
      };

      const response = authReducer(payload, action);

      expect(response.loaded).toEqual(true);
      expect(response.error).toEqual(null);
      expect(response.auth).toEqual(null);
    });

    it("should call CREATE_USER_FAILURE", () => {
      const payload = {
        profile_picture: "abc.png"
      };
      const action = {
        type: CREATE_USER_FAILURE,
        payload
      };

      const response = authReducer(payload, action);
      
      expect(response.loaded).toEqual(false);
      expect(response.error).not.toEqual(null);
    });
  });
});