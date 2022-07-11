import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, batch } from "react-redux";
import { user } from "../reducers/user";
export const Activate = () => {
  const [message, setMessage] = useState();
  const { token } = useParams();
  const navigate = useNavigate();
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
      navigate("/");
    }, 8000);
  }, []);

  return (
    <div className="containerActivate">
      <h1>{message} </h1>
    </div>
  );
};
