const mongoose = require("mongoose");

async function connectToDB(params) {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to database");
}

module.exports = connectToDB;
