import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
  title: {
    type: String,
    default: "Posters",
  },
  name: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
