const express = require("express");
const { port } = require("./config");
const { connectToDB } = require("./config/db");

// Importando routes:
const products = require("./routes/products");

const app = express();
connectToDB();

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});

app.get("/", (req, res) => {
  return res.json({
    name: "drugstore-api",
    author: "gopoma"
  });
});

// Utilizando las rutas:
products(app);
