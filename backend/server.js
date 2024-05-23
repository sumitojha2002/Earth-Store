import express from "express";
import mongoose from "mongoose";
import indexRouter from "./index/indexRouter.js";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});

mongoose
  .connect("mongodb+srv://ojha61863:ojha61863@cluster0.5juqkfq.mongodb.net/")
  .then(() => {
    console.log("successfully connected to the database");
  })
  .catch(() => {
    console.log("unable to connect to the database");
  });
app.use(cors()); 
app.use(express.json());
app.use(indexRouter);
