const { ApolloServer, gql } = require("apollo-server");

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

server.listen({ port: 4000 }).then((result) => console.log(result.url));
console.log("HELLO");
