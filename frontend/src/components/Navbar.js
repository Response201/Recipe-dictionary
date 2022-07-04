import React from 'react'
import { Link } from "react-router-dom";
import './navbar.scss'
import cherry from '../images/cherryTest.png'
export const Navbar = () => {

  return (
    <article className='navbarContainer'>
    <Link to="/">
      <section className='iconContainer' >
        <img src={cherry} alt="logo" /> 
      </section>
    </Link>
    <ul>
      <li>
        <Link to="/" >
          Inspiration
        </Link>
      </li>
      <li>
        <Link to="/" >
          Reservations
        </Link>
      </li>
      <li>
        <Link to="/signin">
          Log in
        </Link>
      </li>
    </ul>
  </article>
  )
}
