const express = require("express");

function products(app) {
  const router = express.Router();

  app.use("/api/products", router);

  router.get("/", async (req, res) => {
    return res.json({message: "Serving all products..."});
  });
}

module.exports = products;
