import React, { useState } from "react";

export const SignInorUp = ({
  title,
  inputOne,
  inputTwo,
  inputThree,
  inputFour,
  showExtraInput,
  onClick,
  btnText
}) => {
  const [oneInput, setOneInput] = useState("");
  const [twoInput, setTwoInput] = useState("");
  const [threeInput, setThreeInput] = useState("");
  const [fourInput, setFourInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if(title === 'Sign in'){


      
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{title}</h2>

      <section>
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
            </>
          ) : (
            ""
          )}
        </>
      </section>
      <section className="dirBtn">
        <button onClick={onClick}> {btnText} </button>
      </section>
      <button type="submit">{title}</button>
    </form>
  );
};
