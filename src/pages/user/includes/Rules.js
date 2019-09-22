import React from "react";

const Rules = ({ setStep }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="home-page text-center">
              <h1 className="">
                <span className="text-success">
                To get the best out of this exercise,
                </span> Ensure to answer all questions with all <b>sincerity!</b>
              </h1>
              <img 
                onClick={() => setStep(3)} 
                src="/assets/img/icons/rules.svg" 
                title="Click to start your journey" 
                className="img-fluid cursor-pointer" />
              <button 
                onClick={() => setStep(3)}
                className="btn btn-outline-success">Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;