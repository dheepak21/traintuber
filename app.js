const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json"); // Ensure this file exists
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://train-tuber.firebaseio.com"
});

const db = admin.firestore();
const auth = admin.auth();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Serve static files (CSS)
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => res.render("login"));
app.get("/signup", (req, res) => res.render("signup"));

// Signup Route (Fixed)
app.post("/signup", async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.send("Passwords do not match!");
    }



    try {
        // Create user in Firebase Auth
        const userRecord = await auth.createUser({
            email,
            password,
            displayName: name
        });

        // Store user data in Firestore
        await db.collection("users").doc(userRecord.uid).set({
            name,
            password,
            email
        });

        res.redirect("/");
    } catch (error) {
        res.send("Error creating user: " + error.message);
    }
});

// Login Route (Fixed)
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const users = await db.collection("users").where("email", "==", email).where("password", "==", password).get();
    
    if (users.empty) {
        return res.send("Invalid email or password!");
    }

    res.send("Login successful!"); // Redirect to dashboard in future
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
