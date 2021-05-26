import React from "react";

export function Cart() {
  let handleCheckout = () => {
    let chk = prompt("are you sure to checkout now?!");
    if (chk) alert("success!!");
  };
  return (
    <div className="cart">
        <p className="items">
          currently you have <span>"::"</span> many items
        </p>
        <p className="costs">
          total cost: <span>"$$$$"</span>
        </p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
  );
}
