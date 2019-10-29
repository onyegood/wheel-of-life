import React, {useState} from "react";
import "./css/Home.css";
import StepOne from "./includes/StepOne";
import StepTwo from "./includes/StepTwo";
import Welcome from "./includes/Welcome";
import Rules from "./includes/Rules";
import Note from "./includes/Note";
import Wheel from "./Wheel";


const HomePage = () => {
  const [gender, setGender] = useState(null);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [questionsCompleted, setQuestionsCompleted] = useState(false);
  const [name, setName] = useState(null);
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   phone: ""
  // });

  // const onChange = e => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const renderView = () => {
    if (step === 1) {
      return <Welcome
        setStep={setStep}
      />;
    }else if(step === 2){
      return <Rules
        setStep={setStep}
      />;
    }else if(step === 3){
      return <Note
        setStep={setStep}
      />;
    }else if(step === 4){
      return <StepOne 
        gender={gender} 
        setGender={setGender}  
        step={step}
        setStep={setStep}
        setCount={setCount}
        setName={setName}
      />;
    }else if(step === 5){
      return <StepTwo 
        name={name}
        setName={setName}
        step={step}
        setStep={setStep}
        setCount={setCount}
        gender={gender}
        setGender={setGender}
        questionsCompleted={questionsCompleted}
        setQuestionsCompleted={setQuestionsCompleted}
      />;
      
    }
  };

  return (
    <>
    {renderView()}
    </>
  );
};


export default HomePage;