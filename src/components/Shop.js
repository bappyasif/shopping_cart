import React from "react";
import { Link } from "react-router-dom";
import { Product } from "./Product";

export function Shop() {
  return (
    <div>
      <h4>Welcome Shoppers</h4>
      <Link to="/shop/:id">test</Link>
    </div>
  );
}
