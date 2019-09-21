import React from "react";
import userReducers from "../../../src/redux/reducer/users";
import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from "../../../src/redux/types/users";
import { users } from "../../data";

describe("User Reducer", () => {
  const INIT_STATE = {
    loaded: false,
    errors: null,
    users: [],
    user: {}
  };

  it("should set default state to empty for all fields", () => {
    const action = {
      type: "@@INIT"
    };

    const state = userReducers(undefined, action);

    expect(state).toEqual(INIT_STATE);
  });

  describe("Add User", () => {
    it("should call ADD_USER_REQUEST to set loaded to true", () => {

      const action = {
        type: ADD_USER_REQUEST
      };

      const response = userReducers(null, action);

      expect(response.loaded).toEqual(true);
    });

    it("should call ADD_USER_SUCCESS with user payload containing user informantion", () => {

      const user = {
        email: "next@gmail.com",
        password: "password",
        firstName: "Next",
        middleName: "User",
        lastName: "Benson",
        gender: "Female",
        phone: "07031111026",
        role: "5c92271643a4bf0ff09e8266"
      };
    
      const action = {
        type: ADD_USER_SUCCESS,
        payload: user
      };

      const response = userReducers(users, action);
      expect(response.users).toEqual([...users, user]);

    });
  });

  describe("Create New User", () => {
    it("should call CREATE_NEW_USER_REQUEST to set loaded to true", () => {

      const action = {
        type: CREATE_NEW_USER_REQUEST
      };

      const response = userReducers(null, action);
      expect(response.loaded).toEqual(true);
    });

    it("should call CREATE_NEW_USER_SUCCESS with user payload containing user informantion", () => {

      const user = {
        email: "next@gmail.com",
        password: "password",
        firstName: "Next",
        middleName: "User",
        lastName: "Benson",
        gender: "Female",
        phone: "07031111026",
        role: "5c92271643a4bf0ff09e8266"
      };
    
      const action = {
        type: CREATE_NEW_USER_SUCCESS,
        payload: user
      };

      const response = userReducers(users, action);
      expect(response.users).toEqual([...users, user]);

    });
  });


  describe("Fetch Users", () => {
    it("should call FETCH_USERS_REQUEST to set loaded to true", () => {

      const action = {
        type: FETCH_USERS_REQUEST
      };

      const response = userReducers(null, action);

      expect(response.loaded).toEqual(true);
    });

    it("should call FETCH_USERS_SUCCESS to return users", () => {
      const action = {
        type: FETCH_USERS_SUCCESS,
        payload: users
      };

      const response = userReducers(null, action);

      expect(response.loaded).toEqual(false);
      expect(response.users).toEqual([...users]);
    });
  });

  describe("Fetch One User", () => {
    it("should call FETCH_USER_REQUEST to set loaded to true", () => {

      const action = {
        type: FETCH_USER_REQUEST
      };

      const response = userReducers(null, action);

      expect(response.loaded).toEqual(true);
    });

    it("should call FETCH_USER_SUCCESS to return user", () => {

      const action = {
        type: FETCH_USER_SUCCESS,
        payload: users[0]
      };

      const response = userReducers(null, action);

      expect(response.loaded).toEqual(false);
      expect(response.user).toEqual(users[0]);
    });
  });

  describe("Delete User", () => {
    it("should call DELETE_USER_REQUEST to set loaded to true", () => {

      const action = {
        type: DELETE_USER_REQUEST
      };

      const response = userReducers(null, action);

      expect(response.loaded).toEqual(true);
    });

    it("should call DELETE_USER_SUCCESS to return user", () => {
      const action = {
        type: DELETE_USER_SUCCESS,
        payload: {
          _id: users[0]._id
        }
      };

      const response = userReducers(users, action);

      expect(response.loaded).toEqual(false);
      expect(response.users).toEqual([users[1], users[2], users[3]]);
    });

    it("Should remove user if id is not found", () => {
      const action = {
        type: DELETE_USER_SUCCESS,
        payload: {
          _id: "-1"
        }
      };
      const response = userReducers(users, action);
      expect(response.users).toEqual(users);
    });
  });

  describe("Update User", () => {
    it("should call UPDATE_USER_REQUEST to set loaded to true", () => {

      const action = {
        type: UPDATE_USER_REQUEST
      };

      const response = userReducers(null, action);

      expect(response.loaded).toEqual(true);
    });

    it("Should edit user", () => {
      const email = "something@yahoo.com";
      const action = {
        type: UPDATE_USER_SUCCESS,
        _id: users[0].id,
        payload: {
          email
        }
      };
      const response = userReducers(users, action);
      expect(response[0].email).toBe(email);
    });
  
    it("Should edit user if id is not found", () => {
      const email = "something@yahoo.com";
      const action = {
        type: UPDATE_USER_SUCCESS,
        id: "-1",
        payload: {
          email
        }
      };
      const response = userReducers(users, action);
      expect(response).toEqual(users);
    });
  });
});

