import express from "express";
import data from "./data.js";
import products from "./products.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api2/products", (req, res) => {
  res.send(products);
});
app.get("/api2/products/:slug", (req, res) => {
  const product = products.find(
    (product) => product.slug === parseInt(req.params.slug)
  );
  if (product) {
    res.send(product);
  } else {
    res.send({});
  }
});

app.get("/api/products/:slug", (req, res) => {
  const product = data.products.find(
    (product) => product.slug === parseInt(req.params.slug)
  );
  if (product) {
    res.send(product);
  } else {
    res.send({});
  }
});

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));
