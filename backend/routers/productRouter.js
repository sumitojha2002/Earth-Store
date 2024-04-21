import { Router } from "express";
import Products from "../mongoose/schemas/product.js";

const productRouter = Router();

productRouter.get("/api/product", async (req, res) => {
  const allProduct = await Products.find();
  return res.status(200).send(allProduct);
});

productRouter.post("/api/product", async (req, res) => {
  const { body } = req;
  if (!body) return res.sendStatus(404);
  try {
    const createProduct = new Products(body);
    const saveProduct = await createProduct.save();
    if (!saveProduct) return res.sendStatus(400);
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
});

export default productRouter;
