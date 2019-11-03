import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import GuestRoute from "./GuestRoute";
import UserRoute from "./UserRoute";
import Spinner from "../component/spinners/LoadingSpinner";

// create Loadable pages
const CheckToken = lazy(() => import("../pages/auth/CheckToken"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const ChangePasswordPage = lazy(() => import("../pages/auth/ChangePasswordPage"));
const ForgotPasswordPage = lazy(() => import("../pages/auth/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("../pages/auth/ResetPasswordPage"));

const UserDashboardPage = lazy(() => import("../pages/user/UserDashboardPage"));
const HomePage = lazy(() => import("../pages/user/HomePage"));

const Routes = (props) => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <ToastContainer />
      <Switch>
        <Route path={["/home", "/"]} exact component={HomePage} /> 
        <Route path="/dashboard" exact component={UserDashboardPage} />

        {/* <UserRoute path="/profile" exact component={ProfilePage} /> */}
        {/* <GuestRoute path="/" exact component={CheckToken} /> */}
        {/* <GuestRoute path="/login" exact component={LoginPage} />
        <GuestRoute path="/change-password/:token" exact component={ChangePasswordPage} />
        <GuestRoute path="/reset-password/:token" exact component={ResetPasswordPage} />
        <GuestRoute path="/forgot-password" exact component={ForgotPasswordPage} /> */}
      </Switch>

    </Suspense>
  </Router>
);

export default Routes;