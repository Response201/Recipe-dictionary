import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { batch } from "react-redux";

import { SignInorUp } from "../components/SignInorUpComponent";
export const Activate = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const { token } = useParams();

  useEffect(async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token })
    };

    await fetch(`https://backend-recipe-ect.herokuapp.com/activate`, options)
      .then((response) => response.json())
      .then((data) => {
        
        if (data.response) {
          batch(() => {
           
            setMessage(data.response.message);
            setTimeout(() => {
              window.location.reload();
              navigate("/");
            }, 5000);



          });
        } else {
          batch(() => {
           
            setMessage(data.message);
            setTimeout(() => {
              window.location.reload();
              navigate("/signin");
            }, 5000);
          });
        }
      });
  }, []);

 

  return (
    <div className="containerActivate">
      <h1>{message} </h1>
    </div>
  );
};
