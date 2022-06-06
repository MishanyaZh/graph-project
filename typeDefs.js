const { gql } = require("apollo-server");

const typeDefs = gql`
  schema {
    query: MyQuery
  }

  type MyQuery {
    books: [Book!]!
    authors: [Author!]!
    users: [User!]!
  }
  type Book {
    title: String!
  }
  type Author {
    name: String!
  }
  type User {
    name: String!
    email: String!
  }

  """
  # The object represeting a MyQuery:
  ## It contains a description MyQuery
  """
  type MyQuery {
    "some description to greeting"
    greeting: String!
    greetingCat: String
    "array strings"
    urls: [String!]!
    randomDiceThrow: Int!
    "3,14"
    pi: Float!
    "true, false"
    isTodaySat: Boolean!
    "true, false array"
    randomCointTossesUntilTrue: [Boolean!]!
    today: DayOfWeek!
    "workDays description array"
    workDays: [DayOfWeek!]!
    "randomQuote"
    randomQuoteTheDay: Quote!
    "randomMovieQuote"
    randomMovieQuote: String!
  }

  """
  # The object represeting a quotes:
  ## It contains a text and author's name
  """
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

module.exports = typeDefs;
