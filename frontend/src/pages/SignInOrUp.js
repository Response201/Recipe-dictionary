import React, { useState } from "react";
import { SignInorUp } from "../components/SignInorUpComponent";
import "./signInOrUp.scss";
export const SignInOrUp = () => {
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState("Create account");
  const [title, setTitle] = useState("Sign In");
  const [urlRout, setUrlRout] = useState("signin");
  

  
  const onClick = () => {
    if (show) {
      setShow(false);
      setBtn("Create account");
      setTitle("Sign in");
      setUrlRout("signin");
    } else {
      setShow(true);
      setBtn("Sing in");
      setTitle("Create account");
      setUrlRout("signup");
    }
  };



  

  return (
    <section className="SignInorUp___Container">
      <SignInorUp
        title={title}
        inputOne={"Email"}
        inputTwo={"Password"}
        inputThree={"Username"}
        inputFour={"Firstname"}
        inputFive={"Lastname"}
        showExtraInput={show}
        onClick={onClick}
        btnText={btn}
        urlRout={urlRout}
      />



    </section>
  );
};
