import React from "react";
import { Link } from "react-router-dom";

export function NavComp() {
  return (
    <ul className="routerNav">
      <p style={{ marginRight: "40%" }}>Navigation</p>
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
