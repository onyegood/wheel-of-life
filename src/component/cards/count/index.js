import React from "react";
import { Link } from "react-router-dom";
import "./css/countStyle.css";
const CountCard = ({ title, count, link_to, class_name }) => {
  return (
    <div className={`${class_name}`}>
      <div className="card-style">
        <Link
          to={link_to}>
          <div className="card text-center text-left mb-4 p-2">
            <div className="card-body">
              <div className="">
                <h2 className="pull-left mr-3 mt-1">{count}</h2>
                <p className="text-left text-wrap">{title}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

CountCard.defaultProps = {
  title: "title",
  count: 0,
  link_to: "/dashboard",
  class_name: "col-md-3",
};
export default CountCard;