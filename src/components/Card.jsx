import React, { useEffect, useState } from "react";
import axios from "axios";

function Card() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/product")
      .then((responce) => setProducts(responce.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div key={product._id} className="card">
          <p>{product.title}</p>
          <p>{product.name}</p>
          <p>$ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
