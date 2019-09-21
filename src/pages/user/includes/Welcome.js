import React from "react";

const Welcome = ({ setStep }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="home-page text-center">
              <h1 className="">
                <span className="text-success">
                Hello and Welcome!
                </span> Take a tour of your <b>Wheel of Life</b>
              </h1>
              <img 
                onClick={() => setStep(2)} 
                src="/assets/img/icons/tour.svg" 
                title="Click to start your journey" 
                className="img-fluid cursor-pointer" />

              <button 
                onClick={() => setStep(2)}
                className="btn btn-outline-success">Start your journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;