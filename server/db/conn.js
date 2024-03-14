const { MongoClient } = require("mongodb");

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        // database & collection code here
        const db = client.db("test");
        const users = db.collection("users");

        // find code here
        const search = users.find();

        // iterate code here
        await search.forEach(console.log)

    } catch(err) {
        console.error(err)
    } finally {
        // ensures the connection is closed when you finish or have an error
        await client.close()
    }
}

run().catch(console.dir)