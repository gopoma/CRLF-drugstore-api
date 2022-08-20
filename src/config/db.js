const mongoose = require("mongoose");
const { 
  dbUsername,
  dbPassword,
  dbHost,
  dbName
} = require(".");

async function connectToDB() {
  dbURI = `mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
  const conn = await mongoose.connect(dbURI);
  console.log("MongoDB connected:", conn.connection.host);
}

module.exports = { connectToDB, mongoose };
