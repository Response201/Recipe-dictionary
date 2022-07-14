import React, {useState} from "react";
import './reset.scss'
export const Reset = () => {
  const [code, setCode] = useState("");

  return (
    <article className="reset___container">
      <section className="reset___content"> 
      <h2>Code verification</h2>
      <section className="reset___input_container"> 
      <p> Please enter the code that been sent to your email</p>

      <input
        type="text"
        placeholder='Enter your code here'
        value={code}
        minLength={5}
        maxLength={10}
        onChange={(e) => setCode(e.target.value)}
      />
      </section>
      <section className="reset___btn_container"> 
      <button>Send</button>
      </section>
      </section>
    </article>
  );
};
