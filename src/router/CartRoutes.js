import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Cart } from "../components/Cart";
import { Home } from "../components/Home";
import { Product } from "../components/Product";
import { Shop } from "../components/Shop";
import { NavComp } from "../navigation/NavComp";

export function CartRoutes() {
  return (
    <Router>
      <Cart />
      <NavComp />
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
      <Route path="/shop/:prodID" component={Product} />
    </Router>
  );
}
