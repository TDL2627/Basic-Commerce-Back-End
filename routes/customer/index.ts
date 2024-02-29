import { Request, Response, Router } from "express";
import { createUser, deleteUser } from "../../functions/customer";

const router = Router();

// GET all customers
router.get("/", (req: Request, res: Response) => {
  // extra functionality
});

// GET customer by ID
router.get("/:id", (req: Request, res: Response) => {
  // extra functionality
});

// DELETE customer by ID
router.delete("/:id", async (req: Request, res: Response) => {
  const customerId = req.params.id;
  await deleteUser(customerId);
  res.json({ message: "Customer deleted successfully" });
});

// POST a new customer
router.post("/", async (req: Request, res: Response) => {
  const { email, name } = req.body;

  await createUser(email, name);
  return res.status(200).json({ message: "User created successfully" });
});

export default router;
