import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../router/CartRoutes";

export function Product(match) {
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(false);

  useEffect(() => fetchingProduct(), []);

  let fetchingProduct = () => {
    setLoading(true);
    let url = `https://fakestoreapi.com/products/${match.match.params.prodID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  let usingContext = useContext(CartContext);

  let handleChanges = () => {
    //   console.log(usingContext,"<>");
    usingContext.updateCost = usingContext.updateCost(
      usingContext.cost + product.price
    );
    usingContext.updateItems = usingContext.updateItems(usingContext.items + 1);
    // usingContext.updateCost(usingContext.cost + product.price);
    // usingContext.updateItems(usingContext.items+1);
    alert("added!!");
  };

  let displayProduct = (
    <div className="productView">
      <h2>Price: {product.title}</h2>
      <img src={product.image} alt={product.title} />
      <h4>Price: {product.price}</h4>
      {/* <CartContext.Consumer> */}
      <button onClick={handleChanges}>Add To Your Cart</button>
      {/* </CartContext.Consumer> */}
      <p>Descriptions: {product.description}</p>
    </div>
  );
  return (
    <div>
      {!loading ? <h4>Product Details</h4> : false}
      {loading ? (
        <div>
          {" "}
          <div style={{ marginBottom: "11px" }}>
            Loading Product Details Here
          </div>{" "}
          <div className="loading"></div>
        </div>
      ) : (
        displayProduct
      )}
    </div>
  );
}

/**
 * 
 * 
   let displayProduct = (
    <div className="productView">
      <h2>Price: {product.title}</h2>
      <img src={product.image} alt={product.title} />
      <h4>Price: {product.price}</h4>
      <button onClick={()=>alert("added!!")}>Add To Your Cart</button>
      <p>Descriptions: {product.description}</p>
    </div>
  );
 */
