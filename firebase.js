const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json"); // Download from Firebase console

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://train-tuber.firebaseio.com"
});

const db = admin.firestore();
module.exports = { db };
