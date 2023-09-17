var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("hi");

const db = admin.firestore();

let testRef = db.collection("users");

testRef.get().then((querySnapshot) => {
  querySnapshot.forEach((document) => {
    console.log(document.data());
  });
});

