import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {batch } from "react-redux";
import { SignInorUp } from "../components/SignInorUpComponent";
export const Activate = () => {
  const [message, setMessage] = useState();
  const [showActivate, setShowActivate] = useState(false)
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
          });
        } else {
          batch(() => {
            setMessage(data.message);
          });
        }
      });

   
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowActivate(true)
    }, 8000);
  }, []);

  return (
    <div className="containerActivate">

{showActivate ? <h1> Log in </h1> : <h1>{message} </h1> }

      
    </div>
  );
};
