const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000;

// const fs = require("fs");
// const path = require("path");

const typeDefs = gql`
  type Query {
    greeting: String
    urls: [String]
  }
`;
const data = {
  greeting: "Hello Misha!",
  urls: ["https://github.com/MishanyaZh"],
};
const server = new ApolloServer({
  typeDefs,
  rootValue: data,
  playground: true,
  introspection: true,
});

server.listen({ port: PORT }).then((result) => console.log(result.url));
console.log("HELLO");

// const server = new ApolloServer({
//   typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
//   resolvers,
// });

// server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
