import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";



export const ReSendVerification = () => {
  const [url, setUrl] = useState("");
 
  const { data, error } = useFetch({ url });
const [show, setShow] = useState(false)

 


  const ReSend = () => {
  
    setShow(true)
   /*  setTimeout(() => {
     setShow(false)
    }, 3000); */

    
    setUrl(`https://backend-recipe-ect.herokuapp.com/reSendVerification`);
   }
  

  return (
    <div>
      
      <button onClick={ReSend}>click here to resend verification link</button>
      {data && show && <p>{data.message}</p>}
      {error && show && <p>{error.message}</p>}
    </div>
  );
};
