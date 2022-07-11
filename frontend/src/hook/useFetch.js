import { useState, useEffect } from "react";
import { useDispatch, batch } from "react-redux";
import { user } from "../reducers/user";

const useFetch = (urls, options) => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(urls, options)
      .then((res) => {
        setLoading(true);
        if (!res.ok) {
          // error coming back from server
          setMessage(message);
          setLoading(false);
        }
        return res.json();
      })
      .then((data) => {
        setLoading(true);
        if (data.response) {
          batch(() => {
            dispatch(user.actions.setFirstname(data.response.firstname));
            dispatch(user.actions.setLastname(data.response.lastname));
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setEmail(data.response.email));
            dispatch(user.actions.setToken(data.response.token));
            dispatch(user.actions.setVerified(data.response.verified));
            setError(null);
            setMessage(data.response.message);
            setLoading(false);
          });
        } else {
          batch(() => {
            dispatch(user.actions.setFirstname(""));
            dispatch(user.actions.setLastname(""));
            dispatch(user.actions.setUsername(""));
            dispatch(user.actions.setEmail(""));
            dispatch(user.actions.setToken(""));
            dispatch(user.actions.setVerified(false));
            setMessage(data.message);
            setLoading(false);
          });
        }
      })

      .catch((err) => {
        // auto catches network / connection error
        setLoading(false);
        setError(err.message);
      });

    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [urls, options, dispatch]);

  return { message, loading, error };
};
export default useFetch;
