import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Switch } from "./components/Switch";
import { useSelector } from "react-redux";
import { Nav } from "./components/Nav";

/* styles */
import "./PageRoutes.scss";

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
              padding: "5px 10px 0 10px"
            }}
          >
            <Nav />
            <Switch />
          </section>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </article>
      </Router>
    </>
  );
};

export default PageRoutes;
