const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
});

app.get("/news", (req, res) => {
    res.render("news");
});

app.get("/about", (req, res) => {
    res.render("about");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
