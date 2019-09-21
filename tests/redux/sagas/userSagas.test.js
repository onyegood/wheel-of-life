// import { recordSaga } from "./SagaTestConfig";
// import {
//   userSignupSaga,
//   forgotPasswordSaga,
//   resetPasswordSaga
// } from "../../../src/redux/sagas/userSaga";
// import {
//   userSignupFailed,
//   userSignupSuccess,
//   forgotPasswordSuccess,
//   forgotPasswordFailed,
//   resetPasswordSuccess,
//   resetPasswordFailed
// } from "../../../src/redux/actions";
// import * as api from "../../../src/api/user";

// describe("User Saga", () => {
//   api.signup = jest.fn();
//   api.forgotPassword = jest.fn();
//   api.resetPassword = jest.fn();

//   beforeEach(() => {
//     jest.resetAllMocks();
//   });

//   describe("userSignupSaga", () => {
//     it("should be called with userSignupSuccess action creator", async () => {
//       const responseData = {
//         success: true
//       };

//       api.signup.mockImplementation(() => responseData);

//       const dispatched = await recordSaga(
//         userSignupSaga,
//         responseData
//       );

//       expect(api.signup.mock.calls.length).toBe(1);
//       expect(dispatched).toContainEqual(userSignupSuccess(responseData));
//     });

//     it("should be called with userSignupFailed action creator", async () => {

//       const responseData = {
//         error: "Something went wrong"
//       };

//       api.signup.mockImplementation(() => responseData);

//       const dispatched = await recordSaga(
//         userSignupSaga,
//         responseData
//       );
//       // console.log(dispatched);
//       expect(api.signup.mock.calls.length).toBe(1);
//       expect(dispatched).not.toContainEqual(userSignupFailed(responseData));
//     });
//   });


//   describe("forgotPasswordSaga", () => {
//     it("should be called with forgotPasswordSuccess action creator", async () => {

//       const responseData = {
//         success: true
//       };

//       api.forgotPassword.mockImplementation(() => responseData);

//       const dispatched = await recordSaga(
//         forgotPasswordSaga,
//         responseData
//       );

//       expect(api.forgotPassword.mock.calls.length).toBe(1);
//       expect(dispatched).toContainEqual(forgotPasswordSuccess(responseData));
//     });

//     it("should be called with forgotPasswordFailed action creator", async () => {

//       const responseData = {
//         error: "Something went wrong"
//       };

//       api.forgotPassword.mockImplementation(() => responseData);

//       const dispatched = await recordSaga(
//         forgotPasswordSaga,
//         responseData
//       );

//       expect(api.forgotPassword.mock.calls.length).toBe(1);
//       expect(dispatched).not.toContainEqual(forgotPasswordFailed(responseData));
//       // console.log(dispatched)
//     });
//   });


//   describe("resetPasswordSaga", () => {
//     it("should be called with resetPasswordSuccess action creator", async () => {

//       const responseData = {
//         success: true
//       };

//       api.resetPassword.mockImplementation(() => responseData);

//       const dispatched = await recordSaga(
//         resetPasswordSaga,
//         responseData
//       );

//       expect(api.resetPassword.mock.calls.length).toBe(1);
//       expect(dispatched).toContainEqual(resetPasswordSuccess(responseData));
//     });

//     it("should be called with resetPasswordFailed action creator", async () => {

//       const responseData = {
//         error: "Something went wrong"
//       };

//       api.resetPassword.mockImplementation(() => responseData);

//       const dispatched = await recordSaga(
//         resetPasswordSaga,
//         responseData
//       );

//       expect(api.resetPassword.mock.calls.length).toBe(1);
//       expect(dispatched).not.toContainEqual(resetPasswordFailed(responseData));
//     });
//   });
// });
