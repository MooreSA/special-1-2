const mongoose = require("mongoose");
const { exit } = require("process");

const userData = {
  users: [
    {
      name: "Jim",
      email: "jim@example.com",
      tel: "123456789",
    },
    {
      name: "Bob",
      email: "bob@example.com",
      tel: "987654321",
    },
    {
      name: "Alice",
      email: "alice@example.com",
      tel: "123456789",
    },
    {
      name: "Tom",
      email: "tom@example.com",
      tel: "987654321",
    },
  ],
};

async function main() {
  await mongoose.connect("mongodb://mongo:27017/test");
  console.log("Connected to MongoDB");

  // Get all collections in an array
  const collections = await mongoose.connection.db.listCollections().toArray();
  collections.forEach((collection) => {
    if (collection.name == "users") {
      console.log("Users collection already exists");
      exit();
    }
  });

  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    tel: Number,
  });

  const User = mongoose.model("User", userSchema);
  userData.users.forEach(async (user) => {
    const newUser = new User(user);
    await newUser.save();
    console.log(`Saved user: ${user.name}`);
  });
  console.log("Seeded the database");
}

main().catch((err) => {
  console.log(err);
});
