import React from "react";
import Layout from "../../layout";
// import CreateAppointment from "./forms/CreateAppointment";
// import AppointmentsTable from "./tables/AppointmentsTable";
import SearchComponent from "../search/SearchComponent";

const SettingsPage = (props) => {
  return (
    <Layout page="Appointment">
      <div className="card mt-5">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" 
              id="user-tab" 
              data-toggle="pill" 
              href="#user" 
              role="tab" 
              aria-controls="user" 
              aria-selected="true">Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" 
              id="role-tab" 
              data-toggle="pill" 
              href="#role" 
              role="tab" 
              aria-controls="role" 
              aria-selected="false">Roles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" 
              id="permission-tab" 
              data-toggle="pill" 
              href="#permission" 
              role="tab" 
              aria-controls="permission" 
              aria-selected="false">Permissions</a>
          </li>
        </ul>
        <div className="tab-content p-3">
          <div className="tab-pane fade show active" 
            id="user" 
            role="tabpanel" 
            aria-labelledby="user-tab">
            <h5 className="mb-3">Appointment Info</h5>
            {/* <CreateAppointment /> */}
          </div>
          <div className="tab-pane fade" 
            id="role" 
            role="tabpanel" 
            aria-labelledby="role-tab">
            <div className="col-md-3 mb-4 m-0 p-0">
              <SearchComponent />
            </div>
            
            {/* <AppointmentsTable /> */}
          </div>

          <div className="tab-pane fade" 
            id="permission" 
            role="tabpanel" 
            aria-labelledby="permission-tab">
            <h5>Permissions</h5>
          </div>

        </div>
      </div>

    </Layout>
  );
};

export default SettingsPage;