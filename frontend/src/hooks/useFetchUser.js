import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ui } from "../reducers/ui";

export const useFetchUser = ({ url, password }) => {
  const token = useSelector((store) => store.user.token);
  const email = useSelector((store) => store.user.email);
  const code = useSelector((store) => store.ui.code);
  const firstname = useSelector((store) => store.user.firstname);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async ({ options }) => {

      try {

        dispatch(ui.actions.setLoading(true));
        const response = await fetch(url, options);
        const json = await response.json();
        dispatch(ui.actions.setLoading(false));
        if (json.message.includes("ok")) {
          dispatch(ui.actions.setNext(json.next));
        }
        dispatch(ui.actions.setMessage(json.message));
      } catch (error) {
        console.log("error", error);
        dispatch(ui.actions.setLoading(false));
        dispatch(ui.actions.setMessage(error.message));
        dispatch(ui.actions.setNext(error.next));
      }
    };

    if (url.includes("reSendVerification") && token) {
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      fetchData({ options });
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
      fetchData({ options });
    }

    if (url.includes("validate")) {
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

      fetchData({ options });
    }

    if (url.includes("change")) {
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

      fetchData({ options });
    }

    
  }, [url, token, dispatch, code, email, firstname, password]);
};
