const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKeys.json");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

//new hope
app.post("/message", (req, res) => {
  const requestData = req.body;
  console.log(
    "Data received from frontend:",
    requestData.key1 + " and " + requestData.key2
  );

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  console.log("Firebase initialized");
  const db = admin.firestore();
  console.log("Firestore instance obtained");

  const data = {
    id: requestData.key1,
    neptunCode: requestData.key2,
    name: "New Hope Update",
  };

  db.collection("users")
    .doc(data.id.toString())
    .set(data)
    .then(() => {
      console.log("Data uploaded to Firestore successfully");
      res.status(200).json({
        message: "POST request received",
        data: requestData.key1,
      });
    })
    .catch((error) => {
      console.error("Error uploading data to Firestore:", error);
      res.status(500).json({ error: "Internal server error" });
    });
  //new hope end
});

app.get("/message", (req, res) => {
  const requestData = req.query;
  res.status(200).json({ message: "Message received : " + JSON.stringify(requestData.key1) +" and "+ JSON.stringify(requestData.key2)});
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
