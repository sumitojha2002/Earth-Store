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
      <h1>What Our Customers Say</h1>
      <div className="customer-feedback-wrapper">
        {customers.map((customer) => (
          <div className="customer-feedback" key={customer.id}>
            <p>{customer.message}</p>
            {customer.id === 1 && (
              <img
                src={customerOne}
                style={{ width: `30px`, height: `30px` }}
                id={1}
              />
            )}
            {customer.id === 2 && (
              <img
                src={customerTwo}
                style={{ width: `30px`, height: `30px` }}
                id={2}
              />
            )}
            {customer.id === 3 && (
              <img
                id={3}
                src={customerThree}
                style={{ width: `30px`, height: `30px` }}
              />
            )}
            <p>{customer.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customer;
