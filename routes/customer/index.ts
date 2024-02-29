import { Request, Response, Router } from "express";
import { createUser } from "../../functions/customer";

const router = Router();

// Sample data (replace with your database operations)
let customers: any = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

// GET all customers
router.get("/", (req: Request, res: Response) => {
  res.json(customers);
});

// GET customer by ID
router.get("/:id", (req: Request, res: Response) => {
  // const customerId = parseInt(req.params.id);
  // const customer = customers.find((customer) => customer.id === customerId);
  // if (customer) {
  //   res.json(customer);
  // } else {
  //   res.status(404).json({ message: "Customer not found" });
  // }
});

// DELETE customer by ID
router.delete("/:id", (req: Request, res: Response) => {
  // const customerId = parseInt(req.params.id);
  // customers = customers.filter((customer) => customer.id !== customerId);
  res.json({ message: "Customer deleted successfully" });
});

// POST a new customer
router.post("/", async (req: Request, res: Response) => {
  await createUser();
  return res.status(201).json({ message: "User created successfully" });
});

export default router;