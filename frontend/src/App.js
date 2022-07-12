import "./App.css";
import React from "react";
import { Switch } from "./components/Switch";
import { Navbar } from "./components/Navbar";
import { PageRoutes } from "./PageRoutes";
import { useSelector } from "react-redux";

export const App = () => {
  const themes = useSelector((store) => store.ui.theme);
  React.useEffect(() => {
    document.documentElement.className = themes;
  }, [themes]);
  return (
    <article body={themes}>
      <section className="navContainer">
        <Navbar />
        <Switch />
      </section>
      <PageRoutes />
    </article>
  );
};

export default App;
