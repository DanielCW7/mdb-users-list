const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/userModel");
const uri = "mongodb+srv://devdanielcw:n8CCLiFqoNhneC6b@cluster0.fnyptwq.mongodb.net/";

// middleware 
app.use(express.json())

// database
const connectDB = () => {
    try {
        mongoose.connect(uri)
        console.log("connected to MDB")
    } catch(err) {
        console.log(err)
    }
}

connectDB()

// routes

app.get("/", (req, res) => {
    res.send({"users": ["1", "2", "3"]})
})

app.post("/user", async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch(err) {
        console.error(err)
        res.send(500).json({ message: message.error })
    }
})

app.listen(5000, () => {
    console.log("Server running on 5000")
})