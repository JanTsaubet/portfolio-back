const { MongoClient } = require("mongodb");

async function getDatabase() {
  // const url =
    // ;
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(Portfolio - Cluster);
  return db;
}

async function all() {
  const db = await getDatabase();
  const collection = db.collection("projects");
  const result = collection.find();
  return result;
}

module.exports = { all };
