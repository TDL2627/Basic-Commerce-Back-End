import { Request, Response, Router } from "express";
import { createMultipleOrders, getAllOrders } from "../../functions/orders";
const router = Router();

// creating multiple orders
router.post("/", async (req: Request, res: Response) => {
  const { orders } = req.body;
  await createMultipleOrders(orders);
  return res.status(200).json({ message: "Orders created successfully" });
});

// fetch all orders
router.get("/", async (req: Request, res: Response) => {
  try {
    const orders = await getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error retrieving orders:", error);
    res.status(500).json({ error: "Failed to retrieve orders" });
  }
});

export default router;
