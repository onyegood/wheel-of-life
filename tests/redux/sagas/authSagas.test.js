import { recordSaga } from "./SagaTestConfig";
import * as api from "../../../src/api/auth";
import { 
  userLoggedIn,
  userLoggedOut,
  userAvatarUploadSuccess,
  userAvatarUploadFailure,
  changePasswordSuccess,
  resetPasswordSuccess,
  forgotPasswordSuccess,
  fetchCurrentUserSuccess
} from "../../../src/redux/actions/auth";
import { 
  fetchUserSaga,
  logoutUserSaga,
  loginUserSaga,
  userAvatarUploadSaga,
  changePasswordSaga,
  resetPasswordSaga,
  forgotPasswordSaga
} from "../../../src/redux/sagas/authSaga";
import {users} from "../../data";
import { messageHandler } from "../../../src/helpers";


describe("Auth", () => {
  api.login = jest.fn();
  api.currentUser = jest.fn();
  api.forgotPassword = jest.fn();
  api.changePassword = jest.fn();
  api.resetPassword = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("Login Saga", () => {
    it("should call userLoginSuccess and log user in", async () => {
      const responseData = {
        success: true,
        token: "token2234",
        admin: {
          role: "5c92271643a4bf0ff09e8266"
        }
      };

      api.login.mockImplementation(() => responseData);

      const dispatched = await recordSaga(
        loginUserSaga,
        responseData
      );

      expect(api.login.mock.calls.length).toBe(1);
      expect(dispatched).toContainEqual(userLoggedIn(responseData.admin));
    });
  });

  describe("Fetch Current User Saga", () => {
    it("should call fetchCurrentUserSuccess and fetch current user", async () => {
      const responseData = {
        payload: users[0]
      };

      api.currentUser.mockImplementation(() => responseData);

      const dispatched = await recordSaga(
        fetchUserSaga,
        responseData
      );
      expect(api.currentUser.mock.calls.length).toBe(1);
      // expect(dispatched).toContainEqual(fetchCurrentUserSuccess(responseData.payload));
    });
  });

  describe("Log Out User", () => {
    it("should call userLoggedOut and log user out", async () => {
      const dispatched = await recordSaga(
        logoutUserSaga
      );
      expect(dispatched).toContainEqual(userLoggedOut());
    });
  });

  describe("Forgot Password", () => {
    it("should call forgotPasswordSuccess and log user out", async () => {

      const responseData = {
        success: true,
        message: "Success"
      };

      const dispatched = await recordSaga(
        forgotPasswordSaga,
        responseData
      );
      expect(api.forgotPassword.mock.calls.length).toBe(1);
      // expect(dispatched).toContainEqual(messageHandler(responseData));
    });
  });

});