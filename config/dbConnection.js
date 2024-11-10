const mongoose = require("mongoose");

const connectDb = async (params) => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connection with DB is successfull");
    console.log(conn.connection.host);
    console.log(conn.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
