import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import QuestionForm from "./QuestionForm";
import IconImages from "./IconImages";
import Options from "./Options";
import Analyse from "./Analyse";
import { bgList } from "../../../component/chartjs/bg";

const StepTwo = ({ setStep, gender, onChange, state, setCount, setGender, setState }) => {
  const [question, setQuestion] = useState(1);
  const [questionCount, setQuestionCount] = useState(0);
  const [analyse, setAnalyse] = useState(false);

  const g = state.growth ? parseInt(state.growth) : 0;
  const fr = state.fun ? parseInt(state.fun) : 0;
  const h = state.health ? parseInt(state.health) : 0;
  
  const ff = state.family ? parseInt(state.family) : 0;
  const r = state.romance ? parseInt(state.romance) : 0;
  const f = state.finance ? parseInt(state.finance) : 0;
  const b = state.business ? parseInt(state.business) : 0;
  const e = state.environment ? parseInt(state.environment) : 0;

  
  let stats = [];
  let withColor = []; //Add Color to the array

  if (h && ff && b && e && fr && r && g && f) {
    stats.push(
      {
        id: 1,
        label: "Health",
        value: h
      },
      {
        id: 2,
        label: "Family and Friends",
        value: ff
      },
      {
        id: 3,
        label: "Business and Career",
        value: b
      },
      {
        id: 4,
        label: "Physical Environment",
        value: e
      },
      {
        id: 5,
        label: "Fun and Recreation",
        value: fr
      },
      {
        id: 6,
        label: "Romance",
        value: r
      },
      {
        id: 7,
        label: "Personal Growth",
        value: g
      },
      {
        id: 8,
        label: "Finance",
        value: f
      }
    );
  }

  stats.map(x => {
    bgList.filter(a => a.sn === x.id).map(c => {
      withColor.push({
        id: x.id,
        label: x.label,
        value: x.value,
        color: c.color,
        colorSN: c.sn
      });
    });
  });


  const sumcount = g + h + fr + ff + r + f + b + e;

  return (
    <div className="container-fluid">
      {!analyse ?
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="home-page">
              <div className="profile-pix">
                <h1 className="text-center mt-3 mb-3">
                  Hi, <img src={`/assets/img/icons/${gender}.svg`} title={`I'm a ${gender}`} className="img-rounded" /> {state && state.name}
                </h1>
              </div>
            </div>
          </div>
        </div>: null }

      <div className="row">
        {!analyse &&
        <div className="col-md-6 mx-auto">
          <div className="row mt-5">
            <div className="col-md-2">
              <IconImages question={question} />
            </div>
          
            <div className={
              state.growth || 
              state.health || 
              state.family || 
              state.fun || 
              state.romance || 
              state.finance || 
              state.business || 
              state.environment ?
                "col-md-6" : "col-md-10"}>
              <QuestionForm 
                state = {state} 
                question = {question} 
                onChange = {onChange} 
                setQuestion = {setQuestion} 
                setQuestionCount = {setQuestionCount} 
                setAnalyse = {setAnalyse} 
                questionCount = {questionCount}
                setStep = {setStep}
                setCount = {setCount}
                setGender = {setGender}
                setState = {setState}
                gender = {gender} />
            </div>
            
            {
              state.growth || 
              state.health || 
              state.family || 
              state.fun || 
              state.romance || 
              state.finance || 
              state.business || 
              state.environment ?
                <div className="col-md-4">
                  {questionCount !== 0 && <ProgressBar color="bg-success" count={questionCount} />}
                  <Options state={state} />
                </div> : null }
          </div> 
        </div>}

        {stats && analyse ? 
          <div className="container">
            <div className="row">
              <div className="col-md-3 mt-5">
                {questionCount !== 0 && <ProgressBar color="bg-success" count={questionCount} />}
                <Options state={state} />
              </div>

              <div className="col-md-9 mt-5">
                <Analyse 
                  stats={withColor}
                  state={state}
                  sumcount={sumcount}
                />
              </div> 
            </div> 
          </div>
          : 
          null }

      </div>
    </div>
  );
};

export default StepTwo;