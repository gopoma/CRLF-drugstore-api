const express = require("express");
const morgan = require("morgan");
const { port } = require("./config");
const { connectToDB } = require("./config/db");


// Importando routes:
const categories = require("./routes/categories");
const products = require("./routes/products");

const app = express();
connectToDB();

// Utilizando middlewares
app.use(morgan("dev"));
app.use(express.json());

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
categories(app);
products(app);
