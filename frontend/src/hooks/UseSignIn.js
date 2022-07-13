import { useEffect } from "react";
import { useDispatch, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../reducers/user";
import { ui } from "../reducers/ui";
/*eslint-disable */
export const UseSignIn = ({
  url,
  oneInput,
  twoInput,
  threeInput,
  fourInput,
  fiveInput
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email: oneInput,
        password: twoInput,
        username: threeInput,
        firstname: fourInput,
        lastname: fiveInput
      })
    };
    if (!url) {
    } else {
      fetch(url, options)
        .then((res) => {
          dispatch(ui.actions.setLoading(true));
          if (!res.ok) {
            // error coming back from server
            // eslint-disable-next-line no-use-before-define
            dispatch(ui.actions.setLoading(false));
            console.log("helvddvlo");
          }
          return res.json();
        })
        .then((data) => {
          dispatch(ui.actions.setLoading(true));
          if (data.response) {
            batch(() => {
              dispatch(user.actions.setFirstname(data.response.firstname));
              dispatch(user.actions.setLastname(data.response.lastname));
              dispatch(user.actions.setUsername(data.response.username));
              dispatch(user.actions.setEmail(data.response.email));
              dispatch(user.actions.setToken(data.response.token));
              dispatch(user.actions.setVerified(data.response.verified));
              dispatch(ui.actions.setMessage(data.response.message));
              dispatch(ui.actions.setLoading(false));
              console.log("true");
              navigate("/signin");
            });
          } else {
            batch(() => {
              dispatch(user.actions.setFirstname(""));
              dispatch(user.actions.setLastname(""));
              dispatch(user.actions.setUsername(""));
              dispatch(user.actions.setEmail(""));
              dispatch(user.actions.setToken(data.token));
              dispatch(user.actions.setId(data.user));
              dispatch(user.actions.setVerified(false));
              dispatch(ui.actions.setMessage(data.message));
              dispatch(ui.actions.setLoading(false));
            });
          }
        })

        .catch((err) => {
          // auto catches network / connection error
          dispatch(ui.actions.setLoading(false));
        });
    }
  }, [dispatch, navigate, url]);
};
