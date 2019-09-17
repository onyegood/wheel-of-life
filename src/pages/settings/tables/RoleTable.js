import React from "react";
// import { deleteIcon, editIcon } from "../../../components/includes/db/svgIcons";

const RoleTable = (props) => {
  return (
    <table className="col-3 table-content px-1">
      <thead className="capitalize table-header">
        <tr className="">
          <th className="ff-heading fw-bold co-table-heading">
          s/n
          </th>
          <th className="ff-heading fw-bold co-table-heading">
          roles
          </th>
          <th className="ff-heading fw-bold co-table-heading">
          action
          </th>
        </tr>
      </thead>
      <tbody className="tablebody pos-rel">

        {props.roles.map((role, i) =>
          <tr key={role._id}>
            <td>
              {i + 1}
            </td>
            <td className="capitalize">
              {role.label}
            </td>
            <td>
              <div class="uk-inline">
                <button class="uk-button uk-button-default" type="button">...</button>
                <div uk-dropdown="pos: right-top">
                  <ul class="uk-nav uk-dropdown-nav">
                    <li style={{ padding: "10px" }}>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          let opts = role.permissions[0].split("\",\"").map(p => {
                            return { label: p, value: p };
                          });
                          props.handleOnClickEdit({
                            modalSwitch: "newRole",
                            _id: role._id,
                            label: role.label,
                            selectedOption: opts
                          });
                        }}>
                         Edit
                      </span>
                    </li>
                    <li style={{ padding: "10px" }}>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          props.handleOnClick({
                            _id: role._id,
                            isDelete: "role",
                            modalSwitch: "deleteAction"
                          });
                        }}
                      > Delete
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

export default RoleTable;