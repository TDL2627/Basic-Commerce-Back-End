import { Request, Response, Router } from "express";
import {
  createOrder,
  deleteOrder,
  updateOrder,
  getOrder,
} from "../../functions/orders";

const router = Router();

// GET order by ID
router.get("/:id", async (req: Request, res: Response) => {
  const orderId = req.params.id;
  const order = await getOrder(orderId);
  console.log(order);
  
  res.json({ message: "Order recieved" });
  return order;
});

// delete order
router.delete("/:id", async (req: Request, res: Response) => {
  const orderId = req.params.id;
  await deleteOrder(orderId);
  res.json({ message: "Order deleted successfully" });
});

// update order
router.put("/:id", async (req: Request, res: Response) => {
  const orderId: string = req.params.id;
  const { paid, customerId, products, total } = req.body;
  const order = { paid, customerId, products, total };
  await updateOrder(orderId, order);
  res.json({ message: "Order updated successfully" });
});

// POST a new order
router.post("/", async (req: Request, res: Response) => {
  const { paid, customerId, products, total } = req.body;
  const order = { paid, customerId, products, total };
  await createOrder(order);
  return res.status(200).json({ message: "Order created successfully" });
});

export default router;
