// https://odyssey.apollographql.com/lift-off-part2/implementing-query-resolvers
const { Image, Author, Lens, Repository } = require("./models");

const resolvers = {
  Query: {
    // ----------------------------------------------------------------------------------------
    //                       Here we have our images for home page query
    // ----------------------------------------------------------------------------------------
    //                                         TODO:
    // decide what images we want. might need to create a subcategory of each image, or simply just display the first image in each category
    // imagesForHomePage: async (parent, args, context, info) => {
    //   return Image.find().;
    // },
    // ----------------------------------------------------------------------------------------
    getImages: async () => {
      const image = await Image.find({});
      return image;
      // return Image.find().sort({ createdAt: -1 });
    },
    getImage: async (_, { imageId }, { dataSources }) => {
      return Image.findOne({ _id: imageId });
    },
    getAuthor: async (_, { authorId }) => {
      const author = await Author.findOne({ _id: authorId });
      return author;
      // return Author.findOne({ _id: authorId });
    },
    getLens: async (_, { lensId }) => {
      const lens = await Lens.findOne({ _id: lensId });
      return lens;
    },
    getRepos: async () => {
      const repos = await Repository.find({});
      return repos;
    },
    getRepo: async (_, { repoId }) => {
      const repo = await Repository.findOne({ _id: repoId });
      return repo;
    },
    // ----------------------------------------------------------------------------------------
  },
  Image: {
    // image type in our schema
    author: (image, _, { dataSources: { authors } }) =>
      authors.getAuthor(image.author),
    // return Author.findOne({ _id: authorId });
    lens: (image, _, { dataSources: { lens } }) => lens.getLens(image.lens),
  },
};

module.exports = resolvers;
