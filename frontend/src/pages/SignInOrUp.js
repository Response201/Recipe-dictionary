import React, { useState } from "react";
import { SignInorUp } from "../components/SignInorUpComponent";
import './signInOrUp.scss'
export const SignInOrUp = () => {
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState("Create account");
  const [title, setTitle] = useState("Sign In");

  const onClick = () => {
    if (show) {
      setShow(false);
      setBtn("Create account");
      setTitle("Sign in");
    } else {
      setShow(true);
      setBtn("Sing in");
      setTitle("Create account");
    }
  };



  return (
    <section className="SignInorUp___Container">
     
      <SignInorUp
        title={title}
        inputOne={"Email"}
        inputTwo={"Password"}
        inputThree={"Firstname"}
        inputFour={"Lastname"}
        showExtraInput={show}
        onClick={onClick}
        btnText={btn}
      />
    </section>
  );
};
