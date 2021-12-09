const { Schema, model } = require("mongoose");

const repositorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tech: [
    {
      type: String,
    },
  ],
});

const Repository = model("Repository", repositorySchema);

module.exports = Repository;
