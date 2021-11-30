const { Schema, model } = require("mongoose");

const keywordSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Keyword = model("Keyword", keywordSchema);

module.exports = Keyword;
