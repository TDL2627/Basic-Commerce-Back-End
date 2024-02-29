const express = require('express');
const router = express.Router();

// Dummy data for orders (replace with your actual data store)
let orders = [
  { id: 1, product: 'Product A', quantity: 2 },
  { id: 2, product: 'Product B', quantity: 1 }
];

// GET all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// DELETE order by ID
router.delete('/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  orders = orders.filter(order => order.id !== orderId);
  res.send(`Order with ID ${orderId} deleted`);
});

// POST new order
router.post('/', (req, res) => {
  const { product, quantity } = req.body;
  const newOrderId = orders.length + 1;
  const newOrder = { id: newOrderId, product, quantity };
  orders.push(newOrder);
  res.send(`Order added: ${JSON.stringify(newOrder)}`);
});

module.exports = router;