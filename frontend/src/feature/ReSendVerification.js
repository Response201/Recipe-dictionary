import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
/*eslint-disable */
export const ReSendVerificationOrPassword = ({ urlEnd }) => {
  const [url, setUrl] = useState("");

  useFetch({ url });

  const ReSend = () => {
    setUrl(`https://backend-recipe-ect.herokuapp.com/${urlEnd}`);
  };

  return (
    <div>
      <a onClick={ReSend}>
        click here to send{" "}
        {urlEnd === "reset" ? "reset password" : "verification"} link
      </a>
    </div>
  );
};
