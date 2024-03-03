import { Request, Response, Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
} from "../../functions/customer";

const router = Router();

// GET all customers
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// GET customer by ID
router.get("/:id", async (req: Request, res: Response) => {
  const customerId = req.params.id;
  try {
    const user = await getUser(customerId);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error retrieving  user:", error);
    res.status(500).json({ error: "Failed to retrieve orders" });
  }
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
