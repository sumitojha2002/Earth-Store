import React, { useState, useEffect } from "react";
import { customerFeedback } from "../data/CutomerFeedback.json";
import customerOne from "../assets/costomer-1.jpeg";
import customerTwo from "../assets/costomer-2.jpeg";
import customerThree from "../assets/costomer-3.jpeg";
import "../Customer.css";

function Customer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Set the initial state with customer feedback data when the component mounts
    setCustomers(customerFeedback);
  }, []);

  return (
    <div>
      <h1 className="customer-title">What Our Customers Say</h1>
      <div className="customer-feedback-wrapper">
        {customers.map((customer) => (
          <div className="customer-feedback" key={customer.id}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "40px", color: "green" }}
            >
              format_quote
            </span>
            <p style={{ paddingRight: "10px" }}>{customer.message}</p>
            {customer.id === 1 && (
              <img
                src={customerOne}
                className="imageProfile"
                style={{ width: `40px`, height: `40px` }}
                id={1}
              />
            )}
            {customer.id === 2 && (
              <img
                className="imageProfile"
                src={customerTwo}
                style={{ width: `40px`, height: `40px` }}
                id={2}
              />
            )}
            {customer.id === 3 && (
              <img
                className="imageProfile"
                id={3}
                src={customerThree}
                style={{ width: `40px`, height: `40px` }}
              />
            )}
            <p style={{ fontSize: "15px" }}>{customer.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customer;
