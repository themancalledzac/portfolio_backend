const { Schema, model } = require("mongoose");

const keywordSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const Keyword = model("Keyword", keywordSchema);

module.exports = Keyword;
