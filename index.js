const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000;

// const fs = require("fs");
// const path = require("path");

const typeDefs = gql`
  type Query {
    greeting: String
    urls: [String]
    randomDiceThrow: Int
    pi: Float
    isSpring: Boolean
    randomCointTossesUntilTrue: [Boolean]
  }
`;

function rootValue() {
  const getRandomDiceThrow = (sides) => Math.ceil(Math.random() * sides);
  const randomCointToss = () => Math.random() > 0.5;
  const getRandomCointTossesUntilTrue = () => {
    const result = [];
    do {
      result.push(randomCointToss());
    } while (!result[result.length - 1]);
    return result;
  };

  return {
    greeting: "Hello Misha!",
    urls: ["https://github.com/MishanyaZh"],
    randomDiceThrow: getRandomDiceThrow(5),
    pi: Math.PI,
    isSpring: true,
    randomCointTossesUntilTrue: getRandomCointTossesUntilTrue,
  };
}
const server = new ApolloServer({
  typeDefs,
  rootValue,
  playground: true,
  introspection: true,
});

server.listen({ port: PORT }).then((result) => console.log(result.url));

// const server = new ApolloServer({
//   typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
//   resolvers,
// });

// server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
