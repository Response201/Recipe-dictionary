import React, { useState } from "react";
import "../pages/signInOrUp.scss";
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
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (urlRout === "signin") {
      console.log(urlRout);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: { oneInput }, password: { twoInput } })
      };

      fetch(`https://backend-recipe-ect.herokuapp.com/${urlRout}`, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.response) {
            console.log(data.response);
            console.log(data);
          } else {
            console.log(data.message);
          }
        });
    } else if (urlRout === "signup") {
      console.log(urlRout, oneInput);

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

      fetch(`https://backend-recipe-ect.herokuapp.com/${urlRout}`, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.response) {
            console.log(data);
            setMessage(data.response.message);
            setOneInput("");
            setTwoInput("");
            setThreeInput("");
            setFourInput("");
            setFiveInput("");
          } else {
            console.log(data.message);
            setMessage(data.message);
          }
        });
    }
  };

  return (
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
  );
};
