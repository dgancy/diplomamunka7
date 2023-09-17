var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const data = {
  id: 3,
  name: "Gancy",
};

db.collection("users").doc(data.id.toString()).set(data);
