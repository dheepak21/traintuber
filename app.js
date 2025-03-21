const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const cron = require("node-cron");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/gallery", (req, res) => {
    const galleryItems = [
        {
            url: "https://res.cloudinary.com/dg3kii8dm/image/upload/v1740975645/t7wteuo2z5f5elplu3g1.jpg",
            title: "Coimbatore Jaipur Superfast Express",
            description: "NULL."
        },
        {
            url: "https://res.cloudinary.com/dg3kii8dm/image/upload/v1740975646/train_image_2.jpg",
            title: "NULL",
            description: "NULL."
        },
        {
            url: "https://res.cloudinary.com/dg3kii8dm/image/upload/v1740975647/train_image_3.jpg",
            title: "NULL",
            description: "NULL."
        },
        {
            url: "https://res.cloudinary.com/dg3kii8dm/image/upload/v1740975648/train_image_4.jpg",
            title: "NULL",
            description: "NULL."
        }
    ];

    res.render("gallery", { galleryItems }); 
});


app.get("/news", (req, res) => {
    res.render("news");
});

app.get("/std", (req, res) => {
    res.render("std");
});

app.get("/videos", (req, res) => {
    res.render("videos");
});

app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/blog1", (req, res) => {
    res.render("blog1");
});
app.get("/blog2", (req, res) => {
    res.render("blog2");
});
app.get("/blog3", (req, res) => {
    res.render("blog3");
});
app.get("/blog4", (req, res) => {
    res.render("blog4");
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
