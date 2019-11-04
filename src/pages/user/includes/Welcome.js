import React, { useEffect } from "react";
import ProgressMultipleBar from "./ProgressMultipleBar";
import Axios from "axios";
import { newBase } from "../../../base/nBase";

const Welcome = ({ setStep }) => {
  {/*useEffect(() => {
    doCallHitmap();
  });

  const doCallHitmap = () => {
    Axios.post(`${newBase}hitmaps`)
      .then(res => console.log(res.data.message))
      .catch(e => console.log(e));
  };*/}

  return (
    <>
    <ProgressMultipleBar dangerCount={20} />

    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="home-page text-center">

              {/*<img className="faa-spin animated" src="/assets/img/icons/wheel-of-life.jpg" width="30" hight="30" />*/}
              
              <h1 className="font-300">
              The Wheel of Life shows how to <b>bring balance to your life</b>, <b>create happiness</b> and <b>success.</b>
              </h1>


              
              <img 
                onClick={() => setStep(2)} 
                src="/assets/img/icons/tour.svg" 
                title="Click to start your journey" 
                className="img-fluid cursor-pointer" />
 
              <button 
                onClick={() => setStep(2)}
                className="btn btn-outline-success">
                Take a tour
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