const { MongoClient, ObjectId } = require("mongodb");

const mongodbUrl = process.env.MONGODB_URL;

async function getDatabase() {
  const client = new MongoClient(mongodbUrl);
  await client.connect();
  const db = client.db("portfolio-db");
  return db;
}

async function getCollection(name) {
  const client = new MongoClient(mongodbUrl);
  await client.connect();
  const db = client.db("portfolio-db");
  return db.collection(name);
}

async function all() {
  const db = await getDatabase();
  const collection = db.collection("projects");
  const result = collection.find();
  return result.toArray();
}

async function one(_id){
  const collection = await getCollection("projects");
  const result = await collection.findOne({_id: new ObjectId(_id)});

  return result;
}

async function create(project) {
  const db = await getDatabase();
  const collection = db.collection("projects");

  return await collection.insertOne(project);
}

async function update(_id, _data) {
  const collection = await getCollection("projects");
  return await collection.updateOne({_id: new ObjectId(_id)}, {$set: _data});
}

async function remove(_id) {
  const collection = await getCollection("projects");
  return await collection.deleteOne({_id: new ObjectId(_id)});
}

module.exports = { all, one, create, update, remove};
