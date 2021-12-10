const db = require("../src/config/connection");
const { Image, Author, Lens, Repository } = require("../src/models");

const repositorySeedData = require("../seeds/repositorySeedData.json");
const imageSeedData = require("../seeds/imageSeedData.json");
const userSeedData = require("../seeds/userSeedData.json");
const lensSeedData = require("../seeds/lensSeedData.json");

db.once("open", async () => {
  try {
    await Image.deleteMany({});
    await Repository.deleteMany({});
    await Author.deleteMany({});
    await Lens.deleteMany({});

    await Lens.create(lensSeedData);
    await Repository.create(repositorySeedData);
    await Author.create(userSeedData);
    await Image.create(imageSeedData);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Images seeded!");
  process.exit(0);
});
