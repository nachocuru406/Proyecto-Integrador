import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Header() {
  let haySesion = cookies.get("user-auth-cookie");
  let favoritasLink = null;
  let authLinks = null;
  if (haySesion) {
    favoritasLink = (
      <li className="nav-item">
        <Link className="nav-link" to="/favoritas">Favoritas</Link>
      </li>
    );
  } else {
    authLinks = (
      <>
        <li className="nav-item ml-auto">
          <Link className="nav-link" to="/registro">Registro</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </>
    );
  }

  return (
    <nav>
      <ul className="nav nav-tabs my-4">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/peliculas">Peliculas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/series">Series</Link>
        </li>
        {favoritasLink}
        {authLinks}
      </ul>
    </nav>
  );
}

export default Header;