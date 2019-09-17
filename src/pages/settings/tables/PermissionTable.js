import React from "react";
// import { deleteIcon } from "../../../components/includes/db/svgIcons";

const PermissionTable = (props) => {
  return (
    <table className="col-3 table-content px-1">
      <thead className="capitalize table-header">
        <tr className="">
          <th className="ff-heading fw-bold co-table-heading">
                        s/n
          </th>
          <th className="ff-heading fw-bold co-table-heading">
                        permissions
          </th>
          <th className="ff-heading fw-bold co-table-heading">
                        action
          </th>
        </tr>
      </thead>
      <tbody className="tablebody pos-rel">
        {props.permissions.map((p, i) =>
          <tr key={p._id}>
            <td>
              {i + 1}
            </td>
            <td className="capitalize">
              {p.label}
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
                          props.handleOnClick({
                            _id: p._id,
                            isDelete: "permission",
                            modalSwitch: "deleteAction"
                          });
                        }}> Delete
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

export default PermissionTable;