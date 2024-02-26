const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
const customerRouter = require('./routes/customer');
const ordersRouter = require('./routes/orders');


const app = express();
const port = 5000;


// routes
app.use('/products', productsRouter);
app.use('/customer', customerRouter);
app.use('/orders', ordersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app
