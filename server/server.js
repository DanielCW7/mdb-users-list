const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/userModel");
const cors = require("cors");
const getUsers = require("./routes/getUsers")
require('dotenv').config()


// middleware 
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET",
    credentials: true
}))

app.use(express.json())

// database
const connectDB = async () => {
    try {
        const response = await mongoose.connect(process.env.ATLAS_URI)
        return response

    } catch(err) {
        console.log(err)
    }
}


// connectDB()

// routes

app.use("/", getUsers)


// app.get("/", async (req, res) => {
//     // res.send({"users": ["1", "2", "3"]})
//     await connectDB();

//     const data = mongoose.connection.getClient().db().admin();
//     const dbInfo = await data.listDatabases();

//     const db = dbInfo.databases.find(db => db.name === "test")
//     res.json({ database: db })

// })

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