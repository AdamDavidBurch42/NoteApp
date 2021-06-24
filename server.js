const express = require("express");
const fs = require("fs");
const app = express();

// Parses the body of the request
// Places the data on `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serves all of our files in public as static assets
app.use(express.static("public"));

const PORT = 8080;

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/notes", (req, res) => res.sendFile(__dirname + "/notes.html"));

app.get("/api/notes", (req,res) => {
    console.log("/api/notes getting da notes");
    fs.readFile(__dirname + "/db/db.json", "utf8", 
    (err, data) => {
        console.log(err);
        res.json(data)
    });
});

app.listen(PORT, () => console.log("the app can hear"));
