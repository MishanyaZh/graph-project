const { ApolloServer, gql } = require("apollo-server");
const Quote = require("inspirational-quotes");
const PORT = process.env.PORT || 4000;

// const fs = require("fs");
// const path = require("path");

const typeDefs = gql`
  schema {
    query: MyQuery
  }
  type MyQuery {
    greeting: String!
    greetingCat: String
    urls: [String!]!
    randomDiceThrow: Int!
    pi: Float!
    isTodaySat: Boolean!
    randomCointTossesUntilTrue: [Boolean!]!
    today: DayOfWeek!
    workDays: [DayOfWeek!]!
    randomQuote: Quote!
  }

  type Quote {
    text: String!
    author: String!
  }

  enum DayOfWeek {
    MON
    TUE
    WED
    THU
    FRI
    SAT
    SUN
  }
`;

function rootValue() {
  const today = new Date();
  const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const getRandomDiceThrow = (sides = 6) => Math.ceil(Math.random() * sides);
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
    greetingCat: randomCointToss() ? "Meow" : null,
    urls: ["https://github.com/MishanyaZh"],
    randomDiceThrow: getRandomDiceThrow(),
    pi: Math.PI,
    isTodaySat: today.getDay() === 6,
    randomCointTossesUntilTrue: getRandomCointTossesUntilTrue,
    today: DAYS_OF_WEEK[today.getDay()],
    workDays: DAYS_OF_WEEK.slice(1, 6),
    randomQuote: Quote.getQuote(),
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
