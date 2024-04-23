import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Card.css";

function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  return (
    <div>
      <div className="card-main">
        {products.map((product) => (
          <div key={product._id} className="card">
            {product.img && (
              <img
                src={`data:${
                  product.img.contentType
                };base64,${arrayBufferToBase64(product.img.data.data)}`}
                alt={product.name}
              />
            )}
            <p className="title">{product.title}</p>
            <p className="name">{product.name}</p>
            <p>${product.price}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
