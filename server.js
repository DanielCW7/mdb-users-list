const express = require("express");
const app = express();

// routes

app.get("/", (req, res) => {
    res.send({"users": ["1", "2", "3"]})
})

app.listen(5000, () => {
    console.log("Server running on 5000")
})