import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Switch, BrowserRouter as Router } from "react-router-dom";
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
const AppointmentPage = lazy(() => import("../pages/appointmemnts/AppointmentPage"));
const CompaniesPage = lazy(() => import("../pages/companies/CompaniesPage"));
const TrucksPage = lazy(() => import("../pages/trucks/TrucksPage"));
const AgentsPage = lazy(() => import("../pages/agents/AgentsPage"));
const SettingsPage = lazy(() => import("../pages/settings/SettingsPage"));
const ProfilePage = lazy(() => import("../pages/user/ProfilePage"));

const Routes = (props) => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <ToastContainer />
      <Switch>
        <UserRoute path="/dashboard" exact component={UserDashboardPage} />
        <UserRoute path="/profile" exact component={ProfilePage} />
        <UserRoute path="/appointmemnts" exact component={AppointmentPage} />
        <UserRoute path="/companies" exact component={CompaniesPage} />
        <UserRoute path="/trucks" exact component={TrucksPage} />
        <UserRoute path="/agents" exact component={AgentsPage} />
        <UserRoute path="/settings" exact component={SettingsPage} />
        
        <GuestRoute path="/" exact component={CheckToken} />
        <GuestRoute path="/login" exact component={LoginPage} />
        <GuestRoute path="/change-password/:token" exact component={ChangePasswordPage} />
        <GuestRoute path="/reset-password/:token" exact component={ResetPasswordPage} />
        <GuestRoute path="/forgot-password" exact component={ForgotPasswordPage} />
        {/* <GuestRoute path="/update-profile/:_id/:token" exact component={EditAdminPage} /> */}
      </Switch>

    </Suspense>
  </Router>
);

export default Routes;