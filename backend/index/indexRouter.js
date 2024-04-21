import { Router } from "express";
import productRouter from "../routers/productRouter.js";

const indexRouter = Router();

indexRouter.use(productRouter);

export default indexRouter;
