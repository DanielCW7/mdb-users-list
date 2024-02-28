// express
const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3", "user4", "user5", "user6"]})
})

// client will run on 3000
app.listen(5000, () => console.log("Server started on port: 5000"))