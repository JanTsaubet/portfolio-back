const { MongoClient, ObjectId } = require("mongodb");
const { hash } = require("bcrypt");

const mongodbUrl = process.env.MONGODB_URL;

async function getCollection(name) {
  const client = new MongoClient(mongodbUrl);
  await client.connect();
  const db = client.db("portfolio-db");
  return db.collection(name);
}

async function getByEmail(email) {
  const collection = await getCollection("users");
  return await collection.findOne({ email });
}
async function register(data) {
  const collection = await getCollection("users");
  const exist = await getByEmail(data.email);

  if (exist) return;

  const passwordHash = await hash(data.password, 10);
  const user = {
    email: data.email,
    name: data.name,
    password: passwordHash,
  };

  return await collection.insertOne(user);
}

module.exports = { getByEmail, register };
