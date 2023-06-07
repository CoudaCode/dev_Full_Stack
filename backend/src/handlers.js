
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

run().then().catch(console.dir);
module.exports = {
    insert
}