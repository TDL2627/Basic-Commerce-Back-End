import { Request, Response, Router } from "express";
import {
  createMultipleProducts,
  getAllProducts,
} from "../../functions/products";
const router = Router();

// creating multiple products
router.post("/", async (req: Request, res: Response) => {
  const { products } = req.body;
  await createMultipleProducts(products);
  return res.status(200).json({ message: "Products created successfully" });
});

// fetch all products
router.get("/", async (req: Request, res: Response) => {

  const products = await getAllProducts();
  res.status(200).json({ message: "Products retrieved successfully" })
  res.send("products");

  return products;
});

export default router;
