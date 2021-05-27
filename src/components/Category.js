import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Category(match) {
  let [category, setcategory] = useState([]);
  // console.log(match);
  useEffect(() => fetchingCategory(), []);
  let fetchingCategory = () => {
    // let url = "https://fakestoreapi.com/products?limit=200";
    let url = "https://fakestoreapi.com/products";
    // console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("!!",data);
        let filteredCategory = data.filter(
          (prod) => prod.category == match.match.params.categoryName
        );
        // console.log(filteredCategory)
        setcategory(filteredCategory);
      })
      .catch((err) => console.log(err));
  };
  let displayProducts = category.map((prod) => (
    <div key={prod.id} className="categoryView">
      <Link to={`/shop/categories/${prod.category}/${prod.id}`}>Product: {prod.title}</Link>
      <img src={prod.image} alt={prod.title} />
      <h4>Price: {prod.price}</h4>
      {/* <p>Descriptions: {prod.description}</p> */}
    </div>
  ));
  return (
    <div>
      <h4> Category: {category.length>0?category[0].category:false}</h4>
      <div className="productsContainer">{displayProducts}</div>
    </div>
  );
}
