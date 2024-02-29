import { Request, Response, Router } from "express";
import {
  createMultipleOrders,
  getAllOrders,
} from "../../functions/orders";
const router = Router();

// creating multiple orders
router.post("/", async (req: Request, res: Response) => {
  const { orders } = req.body;
  await createMultipleOrders(orders);
  return res.status(200).json({ message: "Orders created successfully" });
});

// fetch all orders
router.get("/", async (req: Request, res: Response) => {
  const orders = await getAllOrders();
  console.log(orders);
  res.status(200).json({ message: "Orders retrieved successfully" })
  return orders;
});

export default router;
