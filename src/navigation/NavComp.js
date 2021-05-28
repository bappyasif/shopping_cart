import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/onlineShop.svg";
export function NavComp() {
  return (
    <ul className="routerNav">
      <p className="logoText"><img className="logo" src={Logo} />Your Online Shopping Companion</p>
      <li className="navLinks">
        <Link to="/" className="navs">
          Home
        </Link>
      </li>
      <li className="navLinks">
        <Link to="/shop" className="navs">
          Shop
        </Link>
      </li>
    </ul>
  );
}
