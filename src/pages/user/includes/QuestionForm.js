import React, { useState } from "react";
import Rating from "react-rating";

const QuestionForm =  ({
  state, 
  question, 
  onChange, 
  setQuestion, 
  setQuestionCount, 
  setAnalyse, 
  questionCount,
  setStep,
  setCount,
  setGender,
  setState,
  gender
}) => {

  const [health, setHealth] = useState(0);

  console.log("Health = ", health);

  /*

  






  */

  return (
    <>
      {question >= 9 ? <h1>Now let's analyse your entries</h1> :  null}

      { question === 1 &&
              <div className={state && state.health ? "form-group has-success" : "form-group"}>
                <h2 className="form-control-label" htmlFor="inputSuccess1">Health</h2>
                <p className="font-300-black">
                  On a scale of 1 to 10, rate your current health status?
                </p>
                {/* <Rating 
                  start	= {0}
                  stop = {10}
                  onClick={() => setHealth(health)}
                  onChange={setHealth}
                /> */}
                <select
                  className={state && state.health ? "form-control is-valid" : "form-control"}
                  name="health"
                  value={state.health}
                  onChange={onChange}>
                  <option>Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
      }

      { question === 2 &&
                <div className={state && state.family ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Family and Friends</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, how would you rate your Family and Friends relation?
                  </p>
                  <select
                    className={state && state.family ? "form-control is-valid" : "form-control"}
                    name="family"
                    value={state.family}
                    onChange={onChange}>
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
      }

      { question === 3 &&
                <div className={state && state.business ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Business and Career</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, how would you rate your Business and Career?
                  </p>
                  <select
                    className={state && state.business ? "form-control is-valid" : "form-control"}
                    name="business"
                    value={state.business}
                    onChange={onChange}>
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
      }

      { question === 4 &&
                <div className={state && state.environment ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Physical Environment</h2>
                  <p className="font-300-black">
                    On a scale of 1 to 10, rate your current Physical Environment?
                  </p>
                  <select
                    className={state && state.environment ? "form-control is-valid" : "form-control"}
                    name="environment"
                    value={state.environment}
                    onChange={onChange}>
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
      }

      { question === 5 &&
                <div className={state && state.fun ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Fun and Recreation</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, how would you rate Fun and Recreation?
                  </p>
                  <select
                    className={state && state.fun ? "form-control is-valid" : "form-control"}
                    name="fun"
                    value={state.fun}
                    onChange={onChange}>
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
      }

      { question === 6 &&
                <div className={state && state.romance ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Romance</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, rate your Romance Life?
                  </p>
                  <select
                    className={state && state.romance ? "form-control is-valid" : "form-control"}
                    name="romance"
                    value={state.romance}
                    onChange={onChange}>
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
      }

      { question === 7 &&
                <div className={state && state.growth ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Personal Growth</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, rate your Personal Growth?
                  </p>
                  <select
                    className={state && state.growth ? "form-control is-valid" : "form-control"}
                    name="growth"
                    value={state.growth}
                    onChange={onChange}>
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
      }

      { question === 8 &&
                <div className={state && state.finance ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Finance</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, rate your Finance?
                  </p>
                  <select
                    className={state && state.finance ? "form-control is-valid" : "form-control"}
                    name="finance"
                    value={state.finance}
                    onChange={onChange}>
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
      }

      {gender && 
                <>
                  {question >= 9 ?
                  <>
                    <div className="row">
                      <div className="col-sm-6">
                        <span 
                          onClick={() => {
                            setQuestion(question - 1);
                            setQuestionCount(questionCount - 12.5);
                          }}
                          className="btn btn-outline-danger btn-block mt-5">
                          <i className="ion-md-arrow-back" /> Back
                        </span>
                      </div>
                      <div className="col-sm-6">

                        {
                          state.growth && 
                          state.health && 
                          state.family && 
                          state.fun && 
                          state.romance && 
                          state.finance && 
                          state.business && 
                          state.environment ?
                            <button 
                              onClick={() => {
                                setAnalyse(true);
                              }}
                              className="btn btn-outline-success btn-block mt-5">
                              <i className="fa fa-pie-chart" /> analyse
                            </button>
                            :
                            <p className="text-danger mt-5">Please go back and provide answers to all the questions</p>
                        }
                      </div>
                    </div>
                  </>
                    :
                  <>
                  <div className="row">
                    {question > 1 ? 
                      <div className="col-sm-6">
                        <span 
                          onClick={() => {
                            setQuestion(question - 1);
                            setQuestionCount(questionCount - 12.5);
                          }}
                          className="btn btn-outline-danger btn-block mt-5">
                          <i className="ion-md-arrow-back" /> Back
                        </span>
                      </div>
                      : null}
                    <div className="col-sm-6 mx-auto">
                      <span 
                        onClick={() => {
                          setQuestion(question + 1);
                          setQuestionCount(questionCount + 12.5);
                        }}
                        className="btn btn-outline-success btn-block mt-5">
                      next <i className="ion-md-arrow-forward" />
                      </span>
                    </div>
                  </div>
                  </>
                  }

                <p onClick={() => {
                  setStep(1);
                  setCount(0);
                  setGender(null);
                  setState("");
                  setQuestionCount(0);
                  setAnalyse(false);
                }}
                className="cursor-pointer text-center text-danger mt-3 mb-3">
                  <b><i className="ion-ios-refresh" /> RESET</b>
                </p>
              </>}
    </>
  );
};

export default QuestionForm;