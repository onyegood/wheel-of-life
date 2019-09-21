import React from "react";

const ProgressBar = ({count, color}) => {
  return (
    <div className="progress">
      <div 
        className={color ? `progress-bar ${color}` : "progress-bar"} 
        role="progressbar" 
        style={{width: `${count}%`}} 
        aria-valuenow="15"
        aria-valuemin="0" 
        aria-valuemax="100" />

      {/* <div 
        className="progress-bar bg-success" 
        role="progressbar" 
        style={{width: "30%"}} 
        aria-valuenow="30" 
        aria-valuemin="0" 
        aria-valuemax="100" />

      <div 
        className="progress-bar bg-info" 
        role="progressbar" 
        style={{width: "20%"}} 
        aria-valuenow="20" 
        aria-valuemin="0" 
        aria-valuemax="100" /> */}
    </div>
  );
};

export default ProgressBar;