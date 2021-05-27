import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Cart } from "../components/Cart";
import { Category } from "../components/Category";
import { Home } from "../components/Home";
import { Product } from "../components/Product";
import { Shop } from "../components/Shop";
import { NavComp } from "../navigation/NavComp";

export let CartContext = React.createContext({ cost: 0, items: 0, updateCost: ()=>{}, updateItems: ()=> {} });

export function CartRoutes() {
  let [items, setItems] = useState(0);
  let [cost, setCost] = useState(0);
  let updateItems = (value) => setItems(value);
  let updateCost = (value) => setCost(value);

  return (
    <CartContext.Provider value={{ cost: cost, items: items, updateCost: updateCost, updateItems: updateItems }}>
      <Router>
        <Cart />
        <NavComp />

        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        
        <Route
          exact
          path="/shop/categories/:categoryName"
          component={Category}
        />
        
        <Route
          path="/shop/categories/:categoryName/:prodID"
          component={Product}
        />

      </Router>
    </CartContext.Provider>
  );
}

/**
 * 
 * 
   return (
    <Router>
      <Cart />
      <NavComp />
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/shop/categories/:categoryName" component={Category} />
      <Route
        path="/shop/categories/:categoryName/:prodID"
        component={Product}
      />
    </Router>
  );
 */
