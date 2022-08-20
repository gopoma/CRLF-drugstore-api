const express = require("express");
const CategoryService = require("../services/categories");

function categories(app) {
  const router = express.Router();
  const categoryService = new CategoryService();

  app.use("/api/categories", router);

  router.get("/", async (req, res) => {
    const result = await categoryService.getAll();
    return res.json(result);
  });

  router.post("/", async (req, res) => {
    const result = await categoryService.create(req.body);
    return res.status(result.success ? 200 : 400).json(result);
  });
}

module.exports = categories;
