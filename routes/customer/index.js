const express = require('express');
const router = express.Router();

// Sample data (replace with your database operations)
let customers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
];

// GET all customers
router.get('/', (req, res) => {
  res.json(customers,"list of customers");
});

// GET customer by ID
router.get('/:id', (req, res) => {
  const customerId = parseInt(req.params.id);
  const customer = customers.find(customer => customer.id === customerId);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

// DELETE customer by ID
router.delete('/:id', (req, res) => {
  const customerId = parseInt(req.params.id);
  customers = customers.filter(customer => customer.id !== customerId);
  res.json({ message: 'Customer deleted successfully' });
});

// POST a new customer
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: 'Name is required' });
  } else {
    const newCustomerId = customers.length + 1; 
    const newCustomer = { id: newCustomerId, name };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
  }
});

module.exports = router;