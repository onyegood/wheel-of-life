import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const agents = [
  {
    _id: 1,
    id: "001APC22",
    truckowner: "Ofoegbu Goodnews",
    phone: "07031002066",
    plateNumber: "LGB/20193",
    truckType: "12, Lagos Nigeria"
  }
];

const AgentsTable = (props) => {
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
                Agent ID
              </th>
              <th>
                Company Name
              </th>
              <th>
                Phone Number
              </th>
              <th>
                Address
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody className="tablebody pos-rel">

            {agents.map((truck, i) =>
              <tr key={truck._id}>
                <td>
                  {i + 1}
                </td>
                <td className="capitalize">
                  {truck.id}
                </td>
                <td className="capitalize">
                  {truck.truckowner}
                </td>
                <td className="capitalize">
                  {truck.phone}
                </td>
                <td className="capitalize">
                  {truck.truckType}
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

export default AgentsTable;