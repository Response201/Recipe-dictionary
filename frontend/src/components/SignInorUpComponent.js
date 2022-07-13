import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../pages/signInOrUp.scss";
import { UseSignIn } from "../hooks/UseSignIn";
import { ReSendVerification } from "./ReSendVerification";
import { ui } from "../reducers/ui";

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
  const [url, setUrl] = useState("");
  const accessToken = useSelector((store) => store.user.token);
  const veri = useSelector((store) => store.user.verified);
  const message = useSelector((store) => store.ui.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  UseSignIn({
    url,
    oneInput,
    twoInput,
    threeInput,
    fourInput,
    fiveInput
  });

  useEffect(() => {
    setUrl("");
    if (message.includes("Log in")) {
      setOneInput("");
      setTwoInput("");
      dispatch(ui.actions.setMessage(""));
    }
    if (message.includes("successful"))
      setTimeout(() => {
        setOneInput("");
        setTwoInput("");
        setThreeInput("");
        setFourInput("");
        setFiveInput("");
        dispatch(ui.actions.setMessage(""));
      }, 8000);
  }, [message, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://backend-recipe-ect.herokuapp.com/${urlRout}`);
  };

  useEffect(() => {
    if (accessToken && veri) {
      navigate("/profile");
    } else {
      navigate("/signin");
    }
  }, [accessToken, veri, navigate]);

  return (
    <>
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
                  onChange={(e) =>
                    setThreeInput(e.target.value.toLocaleLowerCase())
                  }
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
        <section className="btnText_password_verification___container">
          <div>
            <span> {message} </span>
            <span>
              {" "}
              {message.includes("Account not verified") && (
                <ReSendVerification />
              )}
              {message.includes("Password is incorrect") && (
                <a href="wwwfdsfs.com">Send new password</a>
              )}{" "}
            </span>
          </div>
          <div onClick={onClick} className="text_createAccount">
            {" "}
            {btnText}{" "}
          </div>
        </section>
        <button type="submit">{title}</button>
      </form>
    </>
  );
};
