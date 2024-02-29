import express from "express";
import * as bodyParser from "body-parser";
import productsRoutes from "./routes/products";
import customerRoutes from "./routes/customer";
import productRoutes from "./routes/product";
import removeProductsRoutes from "./routes/remove-products";
import ordersRoutes from "./routes/orders";
import orderRoutes from "./routes/order";

const app = express();
const port: number = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/customer", customerRoutes);
app.use("/products", productsRoutes);
app.use("/product", productRoutes);
app.use("/remove-products", removeProductsRoutes);
app.use("/order", orderRoutes);
app.use("/orders", ordersRoutes);

app.get("/", (req, res) => {
  res.send("The backend for basic commerce --- Created by TDL2627");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
