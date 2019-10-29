import React, { useState } from "react";
import ProgressMultipleBar from "./ProgressMultipleBar";
import ProgressBar from "./ProgressBar";
import QuestionForm from "./QuestionForm";
import IconImages from "./IconImages";
import Options from "./Options";
import Analyse from "./Analyse";
import { bgList } from "../../../component/chartjs/bg";

const StepTwo = ({ setStep, gender, setCount, setGender, setName, name, questionsCompleted, setQuestionsCompleted }) => {
  const [question, setQuestion] = useState(1);
  const [questionCount, setQuestionCount] = useState(0);
  const [analyse, setAnalyse] = useState(false);
  const [health, setHealth] = useState(0);
  const [family, setFamily] = useState(0);
  const [business, setBusiness] = useState(0);
  const [environment, setEnvironment] = useState(0);
  const [fun, setFun] = useState(0);
  const [romance, setRomance] = useState(0);
  const [growth, setGrowth] = useState(0);
  const [finance, setFinance] = useState(0);

  // const g = growth ? parseInt(growth) : 0;
  // const fr = fun ? parseInt(fun) : 0;
  // const h = health ? parseInt(health) : 0;
  // const ff = family ? parseInt(family) : 0;
  // const r = romance ? parseInt(romance) : 0;
  // const f = finance ? parseInt(finance) : 0;
  // const b = business ? parseInt(business) : 0;
  // const e = environment ? parseInt(environment) : 0;
  
  let stats = [];
  let withColor = []; //Add Color to the array

  stats.push(
    {
      id: 1,
      label: "Health",
      value: health || 0
    },
    {
      id: 2,
      label: "Family and Friends",
      value: family || 0
    },
    {
      id: 3,
      label: "Business and Career",
      value: business || 0
    },
    {
      id: 4,
      label: "Physical Environment",
      value: environment || 0
    },
    {
      id: 5,
      label: "Fun and Recreation",
      value: fun || 0
    },
    {
      id: 6,
      label: "Romance",
      value: romance || 0
    },
    {
      id: 7,
      label: "Personal Growth",
      value: growth || 0
    },
    {
      id: 8,
      label: "Finance",
      value: finance || 0
    }
  );

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


  const sumcount = health + family + business + environment + fun + romance + growth + finance;


  let message;
  const expert = "Please scroll down to see some expert advice for you.";

  if (sumcount <= 39) {
    message = `OOh my God! ${name} your wheel need alignment and this is creitical. ${expert}`;
  }else if (sumcount > 39 && sumcount <= 60) {
    message = `Wow! ${name} I see your wheel look promising but need some alignment. ${expert}`;
  }else if (sumcount > 60 && sumcount <= 75) {
    message = `Looking good! ${name} I see your wheel look good, just a little alignment. ${expert}`;
  } else if (sumcount > 75){
    message = `Great! ${name} I can see things are in the right direction, keep it up. ${expert}`;
  }

  return (
    <>
    {analyse ? 
      <ProgressMultipleBar 
        dangerCount={20} 
        warningCount={20} 
        infoCount={20}
        primaryCount={20}
        successCount={20}
      /> : 
      <ProgressMultipleBar 
        dangerCount={20} 
        warningCount={20} 
        infoCount={20}
        primaryCount={20}
      />}
    <div className="container-fluid">

      {!analyse ?
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="home-page">
              <div className="profile-pix">
                <h1 className="text-center mt-3 mb-3">
                  Hi, <img src={`/assets/img/icons/${gender}.svg`} title={`I'm a ${gender}`} className="img-rounded" /> {name && name}
                </h1>
              </div>
            </div>
          </div>
        </div>: null }

      {analyse && <div className="col-md-9 mx-auto mt-5 mb-4">
        <h1 className="text-center font-300-black">{message}</h1>
      </div>}

      <div className="row">
        {analyse ? null :
          <div className="col-md-6 mx-auto">
            <div className="row mt-5">
              {!questionsCompleted && <div className="col-md-2">
                <div className="questions">
                  <IconImages question={question} />
                </div>
              </div>}
          
              <div className={ growth || health || family || fun || romance || finance || business || environment ? "col-md-6 top-space" : "col-md-10 top-space"}>
                
                <QuestionForm
                  question = {question}
                  setQuestion = {setQuestion} 
                  setQuestionCount = {setQuestionCount} 
                  setAnalyse = {setAnalyse} 
                  questionCount = {questionCount}
                  setStep = {setStep}
                  setCount = {setCount}
                  setGender = {setGender}
                  gender = {gender}
                  health = {health}
                  setHealth = {setHealth}
                  family = {family}
                  setFamily = {setFamily}
                  business = {business}
                  setBusiness = {setBusiness}
                  environment = {environment}
                  setEnvironment = {setEnvironment}
                  fun = {fun}
                  setFun = {setFun}
                  romance = {romance}
                  setRomance = {setRomance}
                  growth = {growth}
                  setGrowth = {setGrowth}
                  finance = {finance}
                  setFinance = {setFinance}
                  setQuestionsCompleted={setQuestionsCompleted}
                />
              </div>
            
              {
                growth || 
              health || 
              family || 
              fun || 
              romance || 
              finance || 
              business || 
              environment ?
                  <div className="col-md-4">
                    {questionCount !== 0 && <ProgressBar color="bg-success" count={questionCount} />}
                    <Options 
                      health={health}
                      family={family}
                      business={business}
                      environment={environment}
                      fun={fun}
                      romance={romance}
                      growth={growth}
                      finance={finance}
                    />
                  </div> : null }
            </div> 
          </div>
        }

        {stats && analyse ? 
          <div className="container">
            <div className="row">
              <div className="col-md-3 mt-5 display">
                {questionCount !== 0 && <ProgressBar color="bg-success" count={questionCount} />}
                <Options 
                  health={health}
                  family={family}
                  business={business}
                  environment={environment}
                  fun={fun}
                  romance={romance}
                  growth={growth}
                  finance={finance}
                />

                {/* <div className="card mt-4 mb-3">
                  <div className="card-body text-center">
                    <h1 className="font-300-black">Wow!, my friend need to see this app.</h1>
                    <button className="btn btn-outline-success mt-3">
                      Invit a friend
                    </button>
                  </div>
                </div> */}
              </div>

              <div className="col-md-9 mt-5">
                <Analyse 
                  stats={withColor}
                  name={name}
                  sumcount={sumcount}
                  setStep={setStep}
                  setCount={setCount}
                  setGender={setGender}
                  setName={setName}
                  setQuestionCount={setQuestionCount}
                  setAnalyse={setAnalyse}
                />
              </div> 
            </div> 
          </div>
          : 
          null }

      </div>
    </div>
    </>
  );
};

export default StepTwo;