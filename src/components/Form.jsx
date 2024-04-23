import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    img: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, img: file });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("img", formData.img);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/product",
        formDataToSend
      );
      console.log("Response:", response.data);
      // Optionally, perform any additional actions upon successful submission
    } catch (error) {
      console.error("Error:", error);
      // Optionally, handle the error or display an error message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} encType="multipart/form-data">
        <input type="file" name="img" onChange={handleFileChange} />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price"
          step="0.01"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
