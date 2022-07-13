import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ui } from "../reducers/ui";

export const useFetch = ({ url }) => {
  
  const token = useSelector((store) => store.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url.includes("reSendVerification") && token) {
          const options = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
          const response = await fetch(url, options);
          const json = await response.json();
          
         
          dispatch(ui.actions.setMessage(json.message))
         
        }
      } catch (error) {
        console.log("error", error);
        dispatch(ui.actions.setLoading(false))
        dispatch(ui.actions.setMessage(error.message))
      }
    };

    fetchData();
  }, [url, token, dispatch]);

 
};
