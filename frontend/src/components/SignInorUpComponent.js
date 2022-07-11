import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../hook/useFetch";
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
  const [url, setUrl] = useState("");
  const [options, setOptions] = useState({});
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.token);
  const veri = useSelector((store) => store.user.verified);

  const { message, loading } = useFetch(`${url}`, options);

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
    setUrl(`https://backend-recipe-ect.herokuapp.com/${urlRout}`);

    {
      urlRout === "signup"
        ? setOptions({
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
          })
        : setOptions({
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: oneInput,
              password: twoInput
            })
          });
    }
  };

  console.log(veri)

  useEffect(() => {
    if (accessToken && veri) {
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
              onChange={(e) => setOneInput(e.target.value)}
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
        </form>
      )}
    </>
  );
};
