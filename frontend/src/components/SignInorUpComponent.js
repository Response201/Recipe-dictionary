import { useState, useEffect } from "react";
import { useDispatch, batch, useSelector } from "react-redux";
import { user } from "../reducers/user";
import { useNavigate } from "react-router-dom";
import "../pages/signInOrUp.scss";
import { Loading } from "./Loading";
export const SignInorUp = ({
  title,
  inputOne,
  inputTwo,
  inputThree,
  inputFour,
  inputFive,
  showExtraInput,
  onClick,
  btnText,
  urlRout
}) => {
  const [oneInput, setOneInput] = useState("");
  const [twoInput, setTwoInput] = useState("");
  const [threeInput, setThreeInput] = useState("");
  const [fourInput, setFourInput] = useState("");
  const [fiveInput, setFiveInput] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.token);
  const veri = useSelector((store) => store.user.verified);
  const dispatch = useDispatch();


  useEffect(() => {
    if (message.includes("success")) {
      setTimeout(() => {
        setOneInput("");
        setTwoInput("");
        setThreeInput("");
        setFourInput("");
        setFiveInput("");
      }, 3000);
    }
  }, [message]);







  const onSubmit = (e) => {
    e.preventDefault();


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
    }
  
    fetch(`https://backend-recipe-ect.herokuapp.com/${urlRout}`, options)
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



       
    }
  



  useEffect(() => {
    if (accessToken && veri === true) {
      navigate("/profile");
    } else {
      navigate("/signin");
    }
  }, [accessToken, veri, navigate]);



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={onSubmit} className="SignInorUp___Form">
          <h2>{title}</h2>

          <section className="SignInorUp___inputContainer">
            <input
              type="text"
              placeholder={inputOne}
              value={oneInput}
              onChange={(e) => setOneInput(e.target.value.toLocaleLowerCase())}
            />
            <input
              type="password"
              placeholder={inputTwo}
              value={twoInput}
              onChange={(e) => setTwoInput(e.target.value)}
            />
            <>
              {showExtraInput ? (
                <>
                  <input
                    type="text"
                    placeholder={inputThree}
                    value={threeInput}
                    onChange={(e) => setThreeInput(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder={inputFour}
                    value={fourInput}
                    onChange={(e) => setFourInput(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder={inputFive}
                    value={fiveInput}
                    onChange={(e) => setFiveInput(e.target.value)}
                  />
                </>
              ) : (
                ""
              )}
            </>
          </section>
          <section className="dirBtn">
            <div onClick={onClick}> {btnText} </div>
          </section>
          <button type="submit">{title}</button>
          <br />
          {message}
          {error}
        </form>
      )}
    </>
  );
};
