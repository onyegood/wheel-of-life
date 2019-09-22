import React from "react";
import ProgressMultipleBar from "./ProgressMultipleBar";

const StepOne = ({ setGender, gender, setStep, setCount, state, onChange, setState }) => {
  
  return (
    <>
    <ProgressMultipleBar 
      dangerCount={20} 
      warningCount={20} 
      infoCount={20}
      primaryCount={20}
    />
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="home-page">
              <h1 className="text-center mb-5">
                <span className="text-success">
                  Let's personalize your experience,
                </span> choose your <b>avatar</b></h1>
              <div className="row">
                { gender === null ? <>
                <div className="col-sm-6 text-center">
                  <div 
                    onClick={() => setGender("male")} 
                    className={
                      gender === "male" ? "card isActive gender-card p-3" : 
                        gender !== "male" && gender !== null ? "card gray-out gender-card p-3" : 
                          "card gender-card p-3"} >
                    <img src="/assets/img/icons/male.svg" title="I'm a male" className="img-fluid" />
                  </div>
                </div>
                <div className="col-sm-6 text-center">
                  <div 
                    onClick={() => setGender("female")} 
                    className={gender === "female" ? "card isActive gender-card p-3" : 
                      gender !== "female" && gender !== null ? "card gray-out gender-card p-3" : 
                        "card gender-card p-3"}>
                    <img src="/assets/img/icons/female.svg" title="I'm a female" className="img-fluid" />
                  </div>
                </div>
                </> : 
                <>
                <div className="col-sm-6 mx-auto">
                  <div 
                    onClick={() => setGender("male")} 
                    className="card gender-selected p-3 isActive">
                    <img src={`/assets/img/icons/${gender}.svg`} title={`I'm a ${gender}`} className="img-rounded" />
                  </div>
                </div>
                </>
                }
                
                {gender && 
                    <>
                    <div className="col-sm-12 mt-4">
                      <h3 className="text-success mt-3 mb-3">I'm a {gender}</h3>
                      <div className={state && state.name.length > 2 ? "form-group has-success" : "form-group"}>
                        <input 
                          className={state && state.name.length > 2 ? "form-control is-valid" : "form-control"}
                          placeholder="Your name please" 
                          name="name"
                          value={state.name}
                          onChange={onChange}
                        />
                      </div>
                    
                      {state && state.name.length > 2 && 
                      <>
                      <button 
                        onClick={() => {
                          setStep(5);
                          setCount(10);
                        }}
                        className="btn btn-outline-success btn-block mt-5">
                        Continue
                      </button>

                      <p onClick={() => {
                        setStep(1);
                        setCount(0);
                        setGender(null);
                        setState("");
                      }}
                      className="cursor-pointer text-center text-danger mt-3 mb-3">
                        <b><i className="ion-ios-refresh" /> RESET</b>
                      </p>
                      </>}
                    </div>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default StepOne;