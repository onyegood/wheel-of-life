import React, {useState} from "react";
import "./css/Home.css";
import StepOne from "./includes/StepOne";
import StepTwo from "./includes/StepTwo";
import ProgressBar from "./includes/ProgressBar";
import Welcome from "./includes/Welcome";
import Rules from "./includes/Rules";


const HomePage = () => {
  const [gender, setGender] = useState(null);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    name: "",
    health: "",
    family: "",
    fun: "",
    romance: "",
    finance: "",
    business: "",
    environment: "",
    growth: ""
  });

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

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
      return <StepOne 
        gender={gender} 
        setGender={setGender}  
        step={step}
        setStep={setStep}
        setCount={setCount}
        setState={setState}
        state={state}
        onChange={onChange}
      />;
    }else if(step === 4){
      return <StepTwo 
        step={step}
        setStep={setStep}
        setCount={setCount}
        gender={gender}
        setGender={setGender}
        setState={setState}
        state={state}
        onChange={onChange}
      />;
      
    }
  };

  return (
    <>
    {renderView()}
    {/* {count > 0 && <ProgressBar count={count} />} */}
    </>
  );
};


export default HomePage;