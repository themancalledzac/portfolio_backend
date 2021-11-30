const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio_backend"
);

module.exports = mongoose.connection;
