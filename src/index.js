const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const mocks = {
  Query: () => ({
    imagesForHomePage: () => [...new Array(6)],
  }),
  Image: () => ({
    id: () => "image_01",
    title: () => "A bike heading into the sunset in the Badlands.",
    author: () => {
      return {
        name: "Zechariah Edens",
        photo:
          "https://res.cloudinary.com/themancalledzac/image/upload/v1638220918/Portfolio/personal_portrait_color_oj6wxn.jpg",
      };
    },
    date: () => "2021-07-14",
    aperture: () => "f2.8",
    exposure: () => "1/160",
    focalLength: () => "70",
    isoSpeed: () => "720",
    lens: () => {
      return {
        title: "NIKKOR Z 70-200mm f/2.8 VR S",
        aperture: "f 2.8",
        fixedLens: false,
        focalLength: "70-200mm",
        brand: "Nikon",
      };
    },
    horizontal: true,
    googleMapsLink: "https://goo.gl/maps/bLo2i3qJKFfKon5C6",
    imageUrl:
      "https://res.cloudinary.com/themancalledzac/image/upload/v1636067236/Portfolio/DSC_0028-Edit_amvgtk.jpg",
    keywords: () => {
      return [
        {
          title: "Badlands",
        },
      ];
    },
  }),
};
const PORT = process.env.PORT || 4000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}.`);
    console.log(`GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(
      `GraphQL at https://studio.apollographql.com/sandbox/explorer/`
    );
  });
});

// Old route from the Apollo-odyssey tutorial
// server.listen().then(() => {
//   console.log(`
//     🚀  Server is running!
//     🔉  Listening on port 4000
//     📭  Query at https://studio.apollographql.com/dev
//   `);
// });
