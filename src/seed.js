
const { config } = require("dotenv");
console.log(config());

setTimeout(function() {
  const usersRepository = require('./repositories/users_repository.js');
  async function seed() {
  console.log("Seed running...");

  await usersRepository.register({
    name: "Admin user",
    email: "admin@miapp.com",
    password: "123qwe123",
  });

  console.log("Seed successful");
  }


  seed();

},100);