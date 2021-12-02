// https://odyssey.apollographql.com/lift-off-part2/implementing-query-resolvers
const { Image, Author } = require("./models");

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
      return Image.find().sort({ createdAt: -1 });
    },
    getImage: async (parent, { imageId }) => {
      return Image.findOne({ _id: imageId });
    },
    getAuthor: async (parent, { authorId }) => {
      return Author.findOne({ _id: authorId });
    },
    // ----------------------------------------------------------------------------------------
  },
  Image: {
    // image type in our schema
    getAuthor: ({ authorId }) => {
      return Author.findOne({ _id: authorId });
    },
  },
};

module.exports = resolvers;
