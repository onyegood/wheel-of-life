import axios from "axios";
jest.mock("axios");

import * as api from "../../src/api/auth";

describe("Auth API", () => {
  describe("Login API", () => {
    it("should call login", async () => {
      const payload = {
        email: "goodnews@softcom.ng",
        password: "password"
      };
      const res = api.login(payload);
      const result = await res.data;
      expect(result).toEqual(undefined);
    });
  });

  describe("Current API`s", () => {
    it("should call currentUser", async () => {
      const res = api.currentUser();
      const result = await res.data;
      expect(result).toEqual(undefined);
    });
  });
});