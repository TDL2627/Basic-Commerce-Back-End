import { Request, Response, Router } from "express";
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
} from "../../functions/products";


const router = Router();

// GET product by ID
router.get("/:id", async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await getProduct(productId);
  console.log(product)
  res.json({ message: "Product recieved" });
  return product
});
// delete product
router.delete("/:id", async (req: Request, res: Response) => {
  const productId = req.params.id;
  await deleteProduct(productId);
  res.json({ message: "Product deleted successfully" });
});

// update product
router.put("/:id", async (req: Request, res: Response) => {
  const productId: string = req.params.id;
  const { name, description, price } = req.body;
  const product = { name, description, price };
  await updateProduct(productId, product);
  res.json({ message: "Product updated successfully" });
});

// POST a new product
router.post("/", async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  await createProduct(description, name, price);
  return res.status(200).json({ message: "Product created successfully" });
});

export default router;
