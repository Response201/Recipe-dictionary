import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import cherry from "../images/cherryTest.png";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const accessToken = useSelector((store) => store.user.token);
  const veri = useSelector((store) => store.user.verified);

  return (
    <article className="navbarContainer">
      <Link to="/">
        <section className="iconContainer">
          <img src={cherry} alt="logo" />
        </section>
      </Link>
      <ul>
        <li>
          <Link to="/">Inspiration</Link>
        </li>
        <li>
          <Link to="/">Reservations</Link>
        </li>
        <li>
          {accessToken && veri? (
            <Link to="/profile">profile</Link>
          ) : (
            <Link to="/signin">Log in</Link>
          )}
        </li>
      </ul>
    </article>
  );
};
