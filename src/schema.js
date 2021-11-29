const { gql } = require("apollo-server");

const typeDefs = gql`
  #Schema definitions go here
  type Query {
    "Get our homepage images"
    imagesForHomePage: [Image!]!
    # TODO: get images query for landscape page
    # TODO: get images query for portrait page
    # TODO: get images query for street page
    # TODO: get images query for event page
  }

  # type Mutation {
  #     uploadImage(id: ID!): uploadImage!
  #     "Here we have a few todos"
  #     # TODO: Mutation for creating Keyword
  #     # TODO: Mutation for uploading image
  #     # TODO: Mutation for creating image
  #     # TODO: Mutation for deleting image
  #     # TODO: Mutation for creating author
  #     # TODO: Mutation for deleting author(?)
  # }

  type Image {
    id: ID!
    "Title of image"
    title: String!
    "Who is our author? Initially only I will be the author, but perhaps someday we can have guest images, or inspiration albums"
    author: Author!
    "Date taken"
    date: String
    "aperture of the image"
    aperture: String
    "exposure time of the image"
    exposure: String
    "focal length of the image, not to be confused with the focual length of the lens, which could be the range of the lens, not what was used for the image."
    focalLength: Int
    "ISO of the image"
    isoSpeed: String
    "Lens used to create image"
    lens: Lens!
    "if using film, we associate what film being used"
    film: [Film]
    "True if horizontal, false if vertical image"
    horizontal: Boolean
    "Google maps location of where the image was shot"
    googleMapsLink: String
    "The image's url, hosted on cloudinary"
    imageUrl: String!
    "The image's keywords for search functionality"
    keywords: [Keyword!]!
  }

  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
    "Author's Instagram"
    instagram: String
  }

  type Keyword {
    id: ID!
    "Title of keyword"
    title: String!
  }

  type Film {
    id: ID!
    "Name of film being used"
    title: String!
    "box speed iso of film"
    iso: String!
    "brand name of film"
    brand: String
  }

  type Lens {
    id: ID!
    "Name of lens being used"
    title: String!
    "Max aperture of lens."
    aperture: String!
    "fixed lens? true if yes, false if a zoom"
    fixedLens: Boolean!
    "focalLength, or range of lens"
    focalLength: String!
    "brand of lens"
    brand: String!
  }
`;

module.exports = typeDefs;
