import React from "react";
import "../Layout.css";
import { Link } from "react-router-dom";
import { Cursor } from "mongoose";

function Layout() {
  return (
    <div>
      <div className="layout">
        <div className="navBar">
          <h2>EARTH STORE</h2>
          <ul>
            <li>
              <Link to="/" className="link" activeClassName="activeClass">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="link" activeClassName="activeClass">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/store" className="link" activeClassName="activeClass">
                STORE
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="link"
                activeClassName="activeClass"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <span
                className="material-symbols-outlined"
                style={{ cursor: `pointer` }}
              >
                shopping_cart
              </span>
            </li>
            <li>
              <span
                className="material-symbols-outlined"
                style={{ cursor: `pointer` }}
              >
                person
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Layout;
