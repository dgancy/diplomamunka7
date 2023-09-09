const express = require("express");
const cors = require("cors");

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKeys.json");

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

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log("Firebase initialized");
  const db = admin.firestore();
  console.log("Firestore instance obtained");

  const data = {
    id: JSON.stringify(queryParameters),
    name: "New Hope Update",
  };

  db.collection("test")
    .doc(data.id.toString())
    .set(data)
    .then(() => {
      console.log("Data uploaded to Firestore successfully");
      res.status(200).json({
        message: "GET request received",
        data: JSON.stringify(queryParameters),
      });
    })
    .catch((error) => {
      console.error("Error uploading data to Firestore:", error);
      res.status(500).json({ error: "Internal server error" });
    });
  //new hope end
});




  //new hope

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
