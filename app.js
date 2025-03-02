const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const cron = require("node-cron");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
});

app.get("/news", (req, res) => {
    res.render("news");
});

app.get("/videos", (req, res) => {
    res.render("videos");
});

app.get("/about", (req, res) => {
    res.render("about");
});

// Start the server
const PORT = process.env.PORT || 3000;
const SERVER_URL = `https://traintuber.onrender.com`;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// Cron job to ping the server every 10 minutes
cron.schedule("*/10 * * * *", async () => {
    try {
        console.log("Pinging server to keep it awake...");
        await axios.get(SERVER_URL);
        console.log("Ping successful!");
    } catch (error) {
        console.error("Error pinging server:", error.message);
    }
});
