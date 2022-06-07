const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const rootValue = require("./rootValue");
const resolvers = require("./resolvers");
const PORT = process.env.PORT || 4000;
const BASE_ASSETS_URL =
  process.env.BASE_ASSETS_URL || "http://examples.devmastery.pl/assets";

const server = new ApolloServer({
  typeDefs,
  rootValue,
  resolvers,
  context: {
    baseAssetsUrl: BASE_ASSETS_URL,
  },
  playground: true,
  introspection: true,
});

server.listen({ port: PORT }).then((result) => console.log(result.url));

//variant 2
// ApolloServer
// const fs = require("fs");
// const path = require("path");

// server.listen
// server.listen().then(({ url }) => console.log(`Server is running on ${url}`));

// ApolloServer
// const server = new ApolloServer({
//   typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
//   resolvers,
// });
