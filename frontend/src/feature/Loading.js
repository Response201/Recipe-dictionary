import React from "react";
import Lottie from "lottie-react";
import walk from "../assets/lotties/63272-walking-taco.json";

export const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Lottie
        animationData={walk}
        loop={true}
        style={{
          width: "100%",
          minWidth: "300px",
          maxWidth: "600px",
          marginBottom: "-120px"
        }}
      />
      <h1
        style={{
          height: "30px",
          fontSize: "2em",
          color: "var(--primary-one)"
        }}
      >
        Loading...
      </h1>
    </div>
  );
};
