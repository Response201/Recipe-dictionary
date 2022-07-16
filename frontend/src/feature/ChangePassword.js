import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ui } from "../reducers/ui";
export const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [url, setUrl] = useState("");
  const message = useSelector((store) => store.ui.message);
  const next = useSelector((store) => store.ui.next);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useFetch({ url, password });

  useEffect(() => {
    if (next === true) {
      navigate("/change");
    } else {
      navigate("/reset");
    }
  }, [next, navigate]);

  useEffect(() => {
    if (message.includes("password have been change")) {
      setTimeout(() => {
        dispatch(ui.actions.setMessage(""));
        navigate("/signin");
        dispatch(ui.actions.setNext(false));
      }, 5000);
    }

    if (message)
      setTimeout(() => {
        dispatch(ui.actions.setMessage(""));
      }, 5000);
  }, [message, dispatch, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password <= 5) {
      dispatch(
        ui.actions.setMessage(
          "Password needs to be at least 6 charachters long"
        )
      );
    }

    if (!password === checkPassword) {
      dispatch(
        ui.actions.setMessage("Please type the password alike in both inputs")
      );
    } else {
      setUrl("https://backend-recipe-ect.herokuapp.com/change");
    }
  };

  return (
    <article className="reset___container">
      <form onSubmit={onSubmit} className="reset___content">
        <h2>Code verification</h2>
        <section className="reset___input_container">
          <p> Please enter the code that been sent to your email</p>
          <input
            type="string"
            placeholder="Password"
            value={password}
            minLength={5}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Check the password"
            value={checkPassword}
            minLength={5}
            onChange={(e) => setCheckPassword(e.target.value)}
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
