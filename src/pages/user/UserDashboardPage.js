import axios from "axios";
import dateFormat from "dateformat";

import React, { useEffect, useState } from "react";
import { newBase } from "../../base/nBase";

const UserDashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [scores, setScores] = useState([]);

  const doGetUsers = () => {
    axios.get(`${newBase}users`)
      .then(res => {
        setUsers(res.data.users);
      })
      .catch(err => console.log(err));
  };

  const doGetScores = () => {
    axios.get(`${newBase}scores`)
      .then(res => {
        setScores(res.data.scores);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    doGetUsers();
    doGetScores();
  }, []);

  return (
    <div className="container-fluid">
      <div className="card m-2 mt-4 mb-4">
        <div className="card-body p-0">
          {/*<h1 className="m-3">Dashboard</h1>*/}
          <div className="table-responsive">
            {users && users.length > 0 ?
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">SN</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Scores</th>
                    <th scope="col">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) =>
                    <tr key={user._id}>
                      <th scope="row">{i+1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        {scores ? scores.filter(s => s.person && s.person._id === user._id).map(score => {
                          return <ul key={score._id}>
                            <li className="badge btn p-2 btn-light mr-2 mb-2">Health {score.health}</li>
                            <li className="badge btn p-2 btn-light mr-2 mb-2">Business {score.business}</li>
                            <li className="badge btn p-2 btn-light mr-2 mb-2">Family {score.family}</li>
                            <li className="badge btn p-2 btn-light mr-2 mb-2">Finance {score.finance}</li>
                            <li className="badge btn p-2 btn-light mr-2 mb-2">Fun {score.fun}</li>
                            <li className="badge btn p-2 btn-light mr-2 mb-2">Growth {score.growth}</li>
                            <li className="badge btn p-2 btn-light mr-2 mb-2">Romance {score.romance}</li>
                            <li className="badge btn p-2 btn-light mr-2 mb-2">Environment {score.environment}</li>
                          </ul>;
                        }) : null}
                      </td>
                      <td>{dateFormat(user.createdAt, "dd, mmm, yy, h:MM:ss TT")}</td>
                    </tr>)
                  }
                </tbody>
              </table>
              : 
              <h5 className="text-center m-5">loading...</h5>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;