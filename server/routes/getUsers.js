require('dotenv').config()
const { MongoClient } = require("mongodb");
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

const getUsers = async (req, res) => {
    try {
        await client.connect();

        // database & collection code here
        const db = client.db("test");
        const users = db.collection("users");
        const search = await users.find().toArray()

        await res.json({ Users: search})
        
    } catch(err) {
        console.error(err)
        res.status(500).json({ message: "server error"})
    } finally {
        // ensures the connection is closed when you finish or have an error
        await client.close()
    }
}


module.exports = getUsers