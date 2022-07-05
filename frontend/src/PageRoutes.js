import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { Switch } from "./components/Switch";
import { useSelector } from "react-redux";
import { Navbar } from "./components/Navbar";
import { Activate } from "./pages/Activate";
/* styles */
import "./PageRoutes.scss";
import { SignInOrUp } from "./pages/SignInOrUp";

export const PageRoutes = () => {
  const themes = useSelector((store) => store.ui.theme);
  React.useEffect(() => {
    document.documentElement.className = themes;
  }, [themes]);
  
  return (
    <>
      <Router>
        <article body={themes}>
          <section
            style={{
              display: "flex",
              "justify-content": "space-between",
              alignItems: "center",
              padding: "1.5px 7px 0px 3px",
              boxShadow: "0.1px 0.1px 5px var(--navDevider)"
            }}
          >
            <Navbar />
            <Switch />
          </section>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/signin" element={<SignInOrUp />}></Route>
            <Route exact path="/activate" element={<Activate />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </article>
      </Router>
    </>
  );
};

export default PageRoutes;
