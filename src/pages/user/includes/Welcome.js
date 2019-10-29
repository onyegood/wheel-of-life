import React from "react";
import ProgressMultipleBar from "./ProgressMultipleBar";

const Welcome = ({ setStep }) => {
  return (
    <>
    <ProgressMultipleBar dangerCount={20} />

    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="home-page text-center">
              
              <h1 className="font-300">The <img className="faa-spin animated" src="/assets/img/icons/wheel-of-life.jpg" width="50" hight="50" /> 
              Wheel of Life shows how to <b>bring balance to your life</b>, <b>create happiness</b> and <b>success.</b></h1>
              
              <img 
                onClick={() => setStep(2)} 
                src="/assets/img/icons/tour.svg" 
                title="Click to start your journey" 
                className="img-fluid cursor-pointer" />

              <button 
                onClick={() => setStep(2)}
                className="btn btn-outline-success">Take a tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Welcome;