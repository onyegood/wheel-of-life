import React from "react";

const UserTable = (props) => {
  return (
    <table className="user-table table-content px-1">
      <thead className="capitalize table-header">
        <tr className="">
          <th className="ff-heading fw-bold co-table-heading">
          s/n
          </th>
          <th className="ff-heading fw-bold co-table-heading">
          first name
          </th>
          <th className="ff-heading fw-bold co-table-heading">
          last name
          </th>
          <th className="ff-heading fw-bold co-table-heading">
          email
          </th>
          <th className="ff-heading fw-bold co-table-heading">
          phone number
          </th>
          <th className="ff-heading fw-bold co-table-heading">
          action
          </th>
        </tr>
      </thead>
      <tbody className="tablebody pos-rel">

        {props.users.map((user, i) =>
          <tr key={user._id}>
            <td>
              {i + 1}
            </td>
            <td className="capitalize">
              {user.fname}
            </td>
            <td className="capitalize">
              {user.lname}
            </td>
            <td>
              {user.email}
            </td>
            <td>
              {user.phone}
            </td>
            <td>
              <div class="uk-inline">
                <button class="uk-button uk-button-default" type="button">...</button>
                <div uk-dropdown="pos: right-top">
                  <ul class="uk-nav uk-dropdown-nav">
                    <li style={{ padding: "10px" }}>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => props.handleOnClickEdit({
                          _id: user._id,
                          fname: user.fname,
                          lname: user.lname,
                          email: user.email,
                          phone: user.phone,
                          role: user.role,
                          updateUser: true,
                          modalSwitch: "editUser"
                        })
                        }>
                         Edit
                      </span>
                    </li>
                    <li style={{ padding: "10px" }}>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => props.handleOnClick({
                          _id: user._id,
                          fname: user.fname,
                          lname: user.lname,
                          isDelete: "user",
                          modalSwitch: "deleteAction"
                        })
                        }>
                         Delete
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>)}
      </tbody>
    </table>

  );
};

export default UserTable;