import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { batch } from "react-redux";

export const Activate = () => {
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
          });
        } else {
          batch(() => {
           
            setMessage(data.message);
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
