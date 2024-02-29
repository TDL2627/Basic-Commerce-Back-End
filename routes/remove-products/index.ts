import { Request, Response, Router } from "express";
import { deleteMultipleProducts } from "../../functions/products";

const router = Router();

// deleting multiple products
router.post("/", async (req: Request, res: Response) => {
  const { products } = req.body;
  await deleteMultipleProducts(products);
  return res.status(200).json({ message: "Products deleted successfully" });
});

export default router;
