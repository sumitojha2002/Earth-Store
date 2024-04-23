import { Router } from "express";
import Product from "../mongoose/schemas/product.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const productRouter = Router();

productRouter.get("/api/product", async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

productRouter.post("/api/product", upload.single("img"), async (req, res) => {
  const { body, file } = req;
  if (!body || !file) return res.sendStatus(400);

  try {
    const newProduct = new Product({
      name: body.name,
      price: body.price,
      img: {
        data: file.buffer,
        contentType: file.mimetype,
      },
    });

    const savedProduct = await newProduct.save();
    if (!savedProduct) return res.sendStatus(500);

    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default productRouter;