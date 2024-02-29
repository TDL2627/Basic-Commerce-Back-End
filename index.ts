import express from "express";
import * as bodyParser from "body-parser";
import productsRoutes from "./routes/products";
import customerRouter from "./routes/customer";
import productRouter from "./routes/product";
import removeProductsRouter from "./routes/remove-products";
// import ordersRouter from "./routes/orders";

const app = express();
const port: number = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/products", productsRoutes);
app.use("/customer", customerRouter);
app.use("/product", productRouter);
app.use("/remove-products", removeProductsRouter);

// app.use("/orders", ordersRouter);

app.get("/", (req, res) => {
  res.send("The backend for basic commerce --- Created by TDL2627");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
