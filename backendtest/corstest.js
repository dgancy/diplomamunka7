const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  // Other headers as needed
  next();
});

app.post("/message", (req, res) => {
  res.status(200).json({ message: "Message received" });
});

app.get("/message", (req, res) => {
  const queryParameters = req.query;
  console.log("Data received from frontend:", JSON.stringify(queryParameters));

  res
    .status(200)
    .json({ message: "GET request received ", data: queryParameters });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
