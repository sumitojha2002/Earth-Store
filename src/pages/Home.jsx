import React from "react";
import Layout from "../components/Layout";
import "../Home.css";
import Card from "../components/Card";
import Form from "../components/Form";

function Home() {
  let i = () => {
    for (i = 0; i < 3; i++) {
      console.log("Shikre");
    }
  };
  return (
    <div>
      <div className="background">
        <Layout />
        <div className="potrate">
          <h1>EARTH</h1>
          <span>MULTIPURPOSE STORE</span>
          <button id="shopNow">SHOP NOW</button>
        </div>
      </div>
      <div className="card-display">
        <Card />
      </div>
      <hr style={{ color: `#d3d3d3` }} />
    </div>
  );
}

export default Home;
