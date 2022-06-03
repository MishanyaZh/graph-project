const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000;

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
const server = new ApolloServer({ typeDefs, rootValue: data });

server.listen({ port: PORT }).then((result) => console.log(result.url));
console.log("HELLO");
