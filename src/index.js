const express = require("express");
const { port } = require("./config");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    name: "drugstore-api",
    author: "gopoma"
  });
});

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
