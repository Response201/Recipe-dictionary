import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { batch, useDispatch, useSelector } from "react-redux";

export const Activate = () => {
  const [message, setMessage] = useState();
  const { token } = useParams();

  const dispatch = useDispatch();

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
            console.log(data.response);
            console.log(data);
            setMessage(data.response.message);
          });
        } else {
          batch(() => {
            console.log(data.message);
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
