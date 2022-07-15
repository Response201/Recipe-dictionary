import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { ui } from "../reducers/ui";
import { user } from "../reducers/user";
import "./resetPassword.scss";
export const ResetPassword = () => {
  const [code, setCode] = useState(null);
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const message = useSelector((store) => store.ui.message);
  const dispatch = useDispatch();
  useFetch({ url });

  useEffect(() => {
   
    if (message)
      setTimeout(() => {
        
        dispatch(ui.actions.setMessage(""));
      }, 5000);
  }, [message, dispatch]);



  const onSubmit = (e) => {
    e.preventDefault();

    if (code.length >= 5) {
      
      dispatch(ui.actions.setCode(parseInt(code)));
      dispatch(user.actions.setEmail(email));
      setUrl("https://backend-recipe-ect.herokuapp.com/validate");
    } else {
      dispatch(
        ui.actions.setMessage("Please check that you enter correct code")
      );
    }
  };

  return (
    <article className="reset___container">
      <form onSubmit={onSubmit} className="reset___content">
        <h2>Code verification</h2>
        <section className="reset___input_container">
          <p> Please enter the code that been sent to your email</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            minLength={5}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your code here"
            value={code}
            minLength={5}
            onChange={(e) => setCode(e.target.value)}
          />
        </section>
        <section className="reset___message_container">
          <div className={message ? "text" : "noText"}> {message}</div>
        </section>
        <section className="reset___btn_container">
          <button type="submit"> Send </button>
        </section>
      </form>
    </article>
  );
};
