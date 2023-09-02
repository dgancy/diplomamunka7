const express = require("express");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!"});
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});
