import React from "react";
import ProgressMultipleBar from "./ProgressMultipleBar";
import { withFormik, Form, Field } from "formik";
import { CustomInputComponent } from "../../../helpers/CustomInputComponent";
import { emailPattern } from "../../../helpers";
import { UserDataValidator } from "../validate/UserDataValidator";

const StepOne = ({ setGender, gender, setStep, setCount, setName, values, setSubmitting }) => {

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


                      <Form id="sign-in-form">
                      
                        <Field
                          name="name"
                          title=""
                          type="text"
                          placeholder="Full Name"
                          component={CustomInputComponent}
                        />

                        <Field
                          name="email"
                          title=""
                          type="email"
                          pattern={emailPattern}
                          placeholder="Email address"
                          component={CustomInputComponent}
                        />
                       
                        <Field
                          name="phone"
                          title=""
                          type="number"
                          placeholder="Mobile Phone"
                          component={CustomInputComponent}
                        />
                      
                    
                        {values && values.name && values.email && values.phone && 
                      <>
                      <button 
                        disabled={setSubmitting}
                        className="btn btn-outline-success btn-block mt-5">
                        Continue
                      </button>

                      <p onClick={() => {
                        setStep(1);
                        setCount(0);
                        setGender(null);
                        setName("");
                      }}

                      className="cursor-pointer text-center text-danger mt-3 mb-3">
                        <b><i className="ion-ios-refresh" /> RESET</b>
                      </p>
                      
                      </>}
                      </Form>
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

const FormikConnect = withFormik({
  mapPropsToValues({ email, name, phone }) {
    return {
      email: email || "",
      name: name || "",
      phone: phone || ""
    };
  },
  validationSchema: UserDataValidator(),
  handleSubmit: async (values, { props, resetForm, setErrors, setSubmitting }) => {
    props.setStep(5);
    props.setCount(10);
    props.setName(values.name);
    // props.submit(values);
    // setTimeout(() => {
    //   props.clearMessage();
    //   resetForm();
    //   setSubmitting(false);
    // }, 500);
  }
});

export default FormikConnect(StepOne);