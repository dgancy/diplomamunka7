const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const options = {
  origin: ["http://localhost:3000", "http://localhost:8080"],
};
app.use(cors(options));

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});
