const mongoose = require("mongoose");
const MongoDb = process.env.MONGODB_URI;

const connectToMongo = async () => {
  await mongoose.connect(
    MongoDb || "mongodb://localhost:27017/portfolio_backend"
  );
};
connectToMongo();
module.exports = mongoose.connection;
