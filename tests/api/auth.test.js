import axios from "axios";
jest.mock("axios");

import * as api from "../../src/api/auth";

describe("Auth API", () => {
  describe("Login API", () => {
    it("should call login", async () => {
      const data = {
        email: "test.test.com",
        password: "password"
      };
      const res = api.login(data);

      console.log(res);
      // const result = await res.data;
      // expect(result).toEqual(undefined);
    });
  });

//   describe("Current API`s", () => {
//     it("should call currentUser", async () => {
//       const res = api.currentUser();
//       const result = await res.data;
//       expect(result).toEqual(undefined);
//     });
//   });

});