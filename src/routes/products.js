const express = require("express");
const ProductService = require("../services/products");

function products(app) {
  const router = express.Router();
  const productService = new ProductService();

  app.use("/api/products", router);

  router.get("/", async (req, res) => {
    const result = await productService.getAll();
    return res.json(result);
  });

  router.post("/", async (req, res) => {
    const result = await productService.create(req.body);
    return res.status(result.success ? 200 : 400).json(result.data);
  });
}

module.exports = products;
