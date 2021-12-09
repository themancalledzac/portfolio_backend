const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { MongoClient } = require("mongodb");
const Images = require("./datasources/Images");
const Authors = require("./datasources/Authors");
const Lens = require("./datasources/Lens");

const PORT = process.env.PORT || 4000;
const app = express();

// -----------------------------------------------------------
// TODO: Need to turn this into an async function
async function serverStart() {
  const client = await new MongoClient(
    "mongodb://localhost:27017/portfolio_backend"
  );
  client.connect();
  return client.db();
}

serverStart().then((database) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      images: new Images(database.collection("images")),
      lens: new Lens(database.collection("lens")),
      authors: new Authors(database.collection("authors")),
    }),
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
});
// TODO:
// -----------------------------------------------------------

// Old route from the Apollo-odyssey tutorial
// server.listen().then(() => {
//   console.log(`
//     🚀  Server is running!
//     🔉  Listening on port 4000
//     📭  Query at https://studio.apollographql.com/dev
//   `);
// });
