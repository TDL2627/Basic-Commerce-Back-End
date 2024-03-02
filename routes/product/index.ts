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
  try {
    const product = await getProduct(productId);
    res.status(200).json(product);
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ error: "Failed to retrieve product" });
  }
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
  console.log(req.body,"aye body");
  
  const { name, description, price } = req.body;
  const product = { name, description, price ,id: productId};
  await updateProduct(productId, product);
  res.json({ message: "Product updated successfully" });
});

// POST a new product
router.post("/", async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  const product = { name, description, price };
  await createProduct(product);
  return res.status(200).json({ message: "Product created successfully" });
});

export default router;
