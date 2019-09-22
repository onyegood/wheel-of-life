import React from "react";
import ProgressMultipleBar from "./ProgressMultipleBar";

const Note = ({ setStep }) => {
  return (
    <>
    <ProgressMultipleBar 
      dangerCount={20} 
      warningCount={20} 
      infoCount={20}
    />
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="home-page text-center">
              <h1>
                <span className="text-success">
                NOTE: Our expert advice will be based on your answers.
                </span> So <b>honesty still remains the gateway to this game.</b>
              </h1>
              <img 
                onClick={() => setStep(4)} 
                src="/assets/img/icons/rules.svg" 
                title="Click to start your journey" 
                className="img-fluid cursor-pointer" />
              
              <button 
                onClick={() => setStep(4)}
                className="btn btn-outline-success">Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Note;