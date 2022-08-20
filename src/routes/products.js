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
    return res.status(result.success ? 201 : 400).json(result);
  });

  router.patch("/:idProduct", async (req, res) => {
    const result = await productService.edit(req.params.idProduct, req.body);
    return res.status(result.success ? 202 : 400).json(result);
  });

  router.put("/:idProduct", async (req, res) => {
    const result = await productService.update(req.params.idProduct, req.body);
    return res.status(result.success ? 202 : 400).json(result);
  });

  router.delete("/:idProduct", async (req, res) => {
    const result = await productService.delete(req.params.idProduct);
    return res.status(result.success ? 200 : 400).json(result);
  });
}

module.exports = products;
