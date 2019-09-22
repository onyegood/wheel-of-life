import React from "react";

const ProgressMultipleBar = ({ dangerCount, warningCount, infoCount, primaryCount, successCount}) => {
  return (
    <div className="progress">
      <div 
        className="progress-bar btn-danger" 
        role="progressbar" 
        style={{width: `${dangerCount}%`}} 
        aria-valuenow="15"
        aria-valuemin="0" 
        aria-valuemax="100" />

      <div 
        className="progress-bar btn-warning"
        role="progressbar" 
        style={{width: `${warningCount}%`}} 
        aria-valuenow="15"
        aria-valuemin="0" 
        aria-valuemax="100" />

      <div 
        className="progress-bar btn-info"
        role="progressbar" 
        style={{width: `${infoCount}%`}} 
        aria-valuenow="15"
        aria-valuemin="0" 
        aria-valuemax="100" />

      <div 
        className="progress-bar btn-primary"
        role="progressbar" 
        style={{width: `${primaryCount}%`}} 
        aria-valuenow="15"
        aria-valuemin="0" 
        aria-valuemax="100" />

      <div 
        className="progress-bar btn-success"
        role="progressbar" 
        style={{width: `${successCount}%`}} 
        aria-valuenow="15"
        aria-valuemin="0" 
        aria-valuemax="100" />
    </div>
  );
};

export default ProgressMultipleBar;