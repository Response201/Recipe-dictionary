import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ui } from "../reducers/ui";

export const useFetch = ({ url, password }) => {
  const token = useSelector((store) => store.user.token);
  const email = useSelector((store) => store.user.email);
  const code = useSelector((store) => store.ui.code);
  const firstname = useSelector((store) => store.user.firstname);
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

          dispatch(ui.actions.setMessage(json.message));
        }

        if (url.includes("reset")) {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email,
              firstname: firstname
            })
          };
          const response = await fetch(url, options);
          const json = await response.json();
          dispatch(ui.actions.setMessage(json.message));
        }

        if (url.includes("validate")) {
          console.log(code, email);
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email,
              code: code
            })
          };
          const response = await fetch(url, options);
          const json = await response.json();
          dispatch(ui.actions.setMessage(json.message));
          dispatch(ui.actions.setNext(json.next));
        }

        if (url.includes("change")) {
          console.log(password, email);
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email,
              password: password
            })
          };
          const response = await fetch(url, options);
          const json = await response.json();
          dispatch(ui.actions.setMessage(json.message));
        }
      } catch (error) {
        console.log("error", error);
        dispatch(ui.actions.setLoading(false));
        dispatch(ui.actions.setMessage(error.message));
        dispatch(ui.actions.setNext(error.next));
      }
    };

    fetchData();
  }, [url, token, dispatch, code, email, firstname, password]);
};
