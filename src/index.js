const express = require("express");
const { port } = require("./config");
const { connectToDB } = require("./config/db");

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
