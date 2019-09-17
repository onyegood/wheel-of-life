import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import SearchComponent from "../../search/SearchComponent";

const companies = [
  {
    _id: 1,
    id: "001APC22",
    truck: "Flat Bed",
    date: Date.now(),
    address: "28, Hello Street",
    truckNumber: 29
  },
  {
    _id: 2,
    id: "005APC22",
    truck: "Flat Bed",
    date: Date.now(),
    address: "28, Hello Street",
    truckNumber: 30
  }
];

const CompaniesTable = (props) => {
  return (
    <div className="card">
      <div className="table-responsive">
        <table className="table">
          <thead className="capitalize table-header">
            <tr className="">
              <th>
                S/N
              </th>
              <th>
                RC Number
              </th>
              <th>
                Company Name
              </th>
              <th>
                Contact Person
              </th>
              <th>
                Address
              </th>
              <th>
                Number of Trucks
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody className="tablebody pos-rel">

            {companies.map((appointment, i) =>
              <tr key={appointment._id}>
                <td>
                  {i + 1}
                </td>
                <td className="capitalize">
                  {appointment.id}
                </td>
                <td className="capitalize">
                  {appointment.truck}
                </td>
                <td>
                  {dateFormat(appointment.date, "dd, mmmm, yyyy")}
                </td>
                <td className="capitalize">
                  {appointment.address}
                </td>
                <td className="capitalize">
                  {appointment.truckNumber}
                </td>
                <td>
                  <div className="dropdown">
                    <button className="btn-sm btn-alt" 
                      type="button" 
                      id="dropdownMenuButton" 
                      data-toggle="dropdown" 
                      aria-haspopup="true" 
                      aria-expanded="false">
                    ....
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link to="/#" className="dropdown-item" href="#">Edit</Link>
                      <Link to="/#" className="dropdown-item" href="#">Delete</Link>
                    </div>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompaniesTable;