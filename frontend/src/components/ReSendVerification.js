import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
/*eslint-disable */
export const ReSendVerification = () => {
  const [url, setUrl] = useState("");

  useFetch({ url });

  const ReSend = () => {
    setUrl(`https://backend-recipe-ect.herokuapp.com/reSendVerification`);
  };

  return (
    <div>
      <a onClick={ReSend}>click here to send verification link</a>
    </div>
  );
};
