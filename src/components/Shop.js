import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Electronics from "../images/01.jpg";
import MensClothing from "../images/men's.jpg";
import WomensClothing from "../images/women's.jpg";
import Jwellery from "../images/jwellery.jpg";

export function Shop() {
  let [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => fetchingProducts(), []);

  let fetchingProducts = () => {
    setLoading(true);
    let url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // let categoryNames = data.filter((item, idx, arr) => arr.indexOf(item.category) == idx);
        let categoryNames = data.map((item) => item.category);
        let uniqueNames = [...new Set(categoryNames)];
        setCategories(uniqueNames);
        // setLoading(!loading);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  let displayCategories = categories.map((prod, idx) => (
    <div key={idx} className="categoriesView">
      <Link to={`shop/categories/${prod}`}>
        <h4>category: {prod}</h4>
        {idx === 0 ? (
          <img src={MensClothing} />
        ) : idx === 1 ? (
          <img src={Jwellery} />
        ) : idx === 2 ? (
          <img src={Electronics} />
        ) : (
          <img src={WomensClothing} />
        )}
        {/* <img src={Electronics} /> */}
      </Link>
    </div>
  ));

  return (
    <div>
      <h4>Welcome Shoppers</h4>
      {/* <Link to="/shop/:id">test</Link> */}
      {/* <div className="productsContainer">{displayCategories}</div> */}
      {loading ? (
        <div>
          {" "}
          <div style={{ marginBottom: "11px" }}>Loading Categories</div>
          <div className="loading"></div>
        </div>
      ) : (
        <div className="productsContainer">{displayCategories}</div>
      )}
      {/* {loading ? <div className="loading">Loading Categories <div></div><div></div></div> : <div className="productsContainer">{displayCategories}</div>} */}
    </div>
  );
}

/**
 * 
 * 
   let displayCategories = categories.map((prod, idx) => (
    <div key={idx} className="categoriesView">
      <Link to={`shop/categories/${prod}`}>
        <h4>category: {prod}</h4>
      </Link>
      <Link to={`shop/categories/${prod.split(" ")[0]}`}>
        <h4>category: {prod}</h4>
      </Link> 
       <Link to={`shop/categories/${idx+1}`}>
        <h4>category: {prod}</h4>
      </Link> 
    </div>
  ));
 */
