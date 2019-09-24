import React, { useState } from "react";
import Rating from "../includes/Rating";

const QuestionForm =  ({
  question,
  setQuestion, 
  setQuestionCount, 
  setAnalyse, 
  questionCount,
  setStep,
  setCount,
  setGender,
  setState,
  gender,
  health,
  setHealth,
  family,
  setFamily,
  business,
  setBusiness,
  environment,
  setEnvironment,
  fun,
  setFun,
  romance,
  setRomance,
  growth,
  setGrowth,
  finance,
  setFinance,
  setQuestionsCompleted
}) => {


  return (
    <>
      {question >= 9 ? <h1>Now let's analyse your entries</h1> :  null}

      { question === 1 &&
              <div className={health ? "form-group has-success" : "form-group"}>
                <h2 className="form-control-label" htmlFor="inputSuccess1">Health</h2>
                <p className="font-300-black">
                  On a scale of 1 to 10, rate your current health status?
                </p>

                <Rating 
                  rating={10}
                  start={1}
                  stop={10}
                  rated={health}
                  value={setHealth}
                />
              </div>
      }

      { question === 2 &&
                <div className={family ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Family and Friends</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, how would you rate your Family and Friends relation?
                  </p>

                  <Rating 
                    rating={10}
                    start={1}
                    stop={10}
                    rated={family}
                    value={setFamily}
                  />
                </div>
      }

      { question === 3 &&
                <div className={business ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Business and Career</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, how would you rate your Business and Career?
                  </p>

                  <Rating 
                    rating={10}
                    start={1}
                    stop={10}
                    rated={business}
                    value={setBusiness}
                  />
                </div>
      }

      { question === 4 &&
                <div className={environment ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Physical Environment</h2>
                  <p className="font-300-black">
                    On a scale of 1 to 10, rate your current Physical Environment?
                  </p>

                  <Rating 
                    rating={10}
                    start={1}
                    stop={10}
                    rated={environment}
                    value={setEnvironment}
                  />
                </div>
      }

      { question === 5 &&
                <div className={fun ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Fun and Recreation</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, how would you rate Fun and Recreation?
                  </p>

                  <Rating 
                    rating={10}
                    start={1}
                    stop={10}
                    rated={fun}
                    value={setFun}
                  />
                </div>
      }

      { question === 6 &&
                <div className={romance ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Romance</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, rate your Romance Life?
                  </p>

                  <Rating 
                    rating={10}
                    start={1}
                    stop={10}
                    rated={romance}
                    value={setRomance}
                  />
                </div>
      }

      { question === 7 &&
                <div className={growth ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Personal Growth</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, rate your Personal Growth?
                  </p>

                  <Rating 
                    rating={10}
                    start={1}
                    stop={10}
                    rated={growth}
                    value={setGrowth}
                  />
                </div>
      }

      { question === 8 &&
                <div className={finance ? "form-group has-success" : "form-group"}>
                  <h2 className="form-control-label" htmlFor="inputSuccess1">Finance</h2>
                  <p className="font-300-black">
                  On a scale of 1 to 10, rate your Finance?
                  </p>

                  <Rating 
                    rating={10}
                    start={1}
                    stop={10}
                    rated={finance}
                    value={setFinance}
                  />
                </div>
      }

      {gender && 
                <>
                  {question === 8 ?
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
                        <span 
                          onClick={() => {
                            setQuestion(question + 1);
                            setQuestionCount(questionCount + 12.5);
                            setQuestionsCompleted(true);
                          }}
                          className="btn btn-outline-success btn-block mt-5">
                      next <i className="ion-md-arrow-forward" />
                        </span>
                      </div>
                    </div>
                  </>
                    : question >= 9 ? 
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

                        <button 
                          onClick={() => {
                            setAnalyse(true);
                          }}
                          className="btn btn-outline-success btn-block mt-5">
                          <i className="fa fa-pie-chart" /> analyse
                        </button>
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
                  setQuestionsCompleted(false);
                }}
                className="cursor-pointer text-center text-danger mt-3 mb-3">
                  <b><i className="ion-ios-refresh" /> RESET</b>
                </p>
              </>}
    </>
  );
};

export default QuestionForm;