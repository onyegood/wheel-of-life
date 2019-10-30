import React from "react";
import ProgressMultipleBar from "./ProgressMultipleBar";

const Rules = ({ setStep }) => {
  return (
    <>
    <ProgressMultipleBar 
      dangerCount={20} 
      warningCount={20} 
    />
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="home-page text-center">
              <h1>
                <span className="text-success">
                To get the best out of this exercise,
                </span> ensure you answer all questions with all <b>sincerity!</b>
              </h1>
              <div className="p-3">
                <img 
                  onClick={() => setStep(3)} 
                  src="/assets/img/icons/learning.svg" 
                  title="Click to start your journey" 
                  className="img-fluid cursor-pointer" />
              </div>
              <button 
                onClick={() => setStep(3)}
                className="btn btn-outline-success">Next <i className="ion-md-arrow-forward" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Rules;