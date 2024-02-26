const express = require('express');
const router = express.Router();

// Define routes for products
router.get('/', (req, res) => {
  res.send('List of products');
});

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Product details for ID ${productId}`);
});

module.exports = router;