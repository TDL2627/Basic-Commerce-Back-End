const admin = require("firebase-admin");
const functions = require("firebase/compat/functions");
const serviceAccount = require("./service.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
const db = admin.firestore();
module.exports = { admin, db, functions };
