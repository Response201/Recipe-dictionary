import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { batch, useDispatch } from "react-redux";


export const Activate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState();
  const { token } = useParams();

  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token })
    };

    fetch(`https://backend-recipe-ect.herokuapp.com/activate`, options)
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

        setTimeout(() => {
          navigate("/signin");
        }, 3000);
      });
  }, [token, dispatch, navigate]);

  return (
    <div className="containerActivate">
      <h1>{message} </h1>
    </div>
  );
};
