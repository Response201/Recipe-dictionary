import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../reducers/user";

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(user.actions.setToken(""))
    dispatch(user.actions.setEmail(""));
    navigate("/signin");
    
  };
  return (
    <div>
      <h2> Profil </h2>

      <button onClick={LogOut}>Log out</button>
    </div>
  );
};
