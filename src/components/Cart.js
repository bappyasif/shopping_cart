import React, { useContext } from "react";
import { CartContext } from "../router/CartRoutes";

export function Cart() {
  let cartContext = useContext(CartContext);

  let handleCheckout = () => {
    let chk = prompt("are you sure to checkout now?!");
    if (chk && cartContext.items > 0) alert("success!!");
    else alert("add items to your cart please")
    // resetting cart
    cartContext.updateCost(0);
    cartContext.updateItems(0);
  };
  return (
    <div className="cart">
      <p className="items">
        currently you have <span>{cartContext.items} </span> many items
      </p>
      <p className="costs">
        total cost: $<span> {cartContext.cost}</span>
      </p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
