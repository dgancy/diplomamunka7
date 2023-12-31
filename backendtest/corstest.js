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
  res.status(200).json({
    message: "Message received : " + JSON.stringify(requestData.key1),
  });
});

app.post("/savemistakes", (req, res) => {
  const requestData = req.body;
  console.log(
    "Data received from frontend:",
    requestData.key1 +
      " and " +
      requestData.key2 +
      " and " +
      requestData.key3 +
      " and " +
      requestData.key4 +
      " and " +
      requestData.key5 +
      " and " +
      requestData.key6 +
      " and neptun" +
      requestData.key7
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
    id: requestData.key7, //uid
    rekurzios: requestData.key1,
    mester: requestData.key2,
    bfa: requestData.key3,
    hash: requestData.key4,
    rbtree: requestData.key5,
    back: requestData.key6,
  };

  db.collection("mistakes")
    .doc(data.id.toString())
    .set(data)
    .then(() => {
      console.log("Data uploaded to Firestore successfully");
      res.status(200).json({
        message: "POST request received",
        data: requestData.key7,
      });
    })
    .catch((error) => {
      console.error("Error uploading data to Firestore:", error);
      res.status(500).json({ error: "Internal server error" });
    });
  //new hope end
});

app.get("/savemistakes", (req, res) => {
  const requestData = req.body;
  res.status(200).json({
    message:
      "Mistakes received : " +
      JSON.stringify(requestData.key1) +
      " and " +
      JSON.stringify(requestData.key2) +
      " and " +
      JSON.stringify(requestData.key3) +
      " and " +
      JSON.stringify(requestData.key4) +
      " and " +
      JSON.stringify(requestData.key5) +
      " and " +
      JSON.stringify(requestData.key6) +
      JSON.stringify(requestData.key7),
  });
});

var downDatas;
app.post("/userid", (req, res) => {
  const requestData = req.body;
  const uid = requestData.key1;

  var admin = require("firebase-admin");
  var serviceAccount = require("./serviceAccountKeys.json");

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();

  let testRef = db.collection("mistakes").doc(uid);

  testRef
    .get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        downDatas = docSnapshot.data();
        res.status(200).json(downDatas); 
      } else {
        console.log("Document not found");
        res.status(404).json({ message: "Document not found" }); 
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
      res.status(500).json({ message: "Internal Server Error" }); 
    });
});

app.get("/userid", (req, res) => {
  const requestData = req.query;
  const { rekurzios, mester, back, id, bfa, rbtree, hash } = downDatas;

  res.status(200).json({
    message:
      id +
      "," +
      mester +
      "," +
      back +
      "," +
      bfa +
      "," +
      rbtree +
      "," +
      hash +
      "," +
      rekurzios,
  });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
