const { gql } = require("apollo-server");

const typeDefs = gql`
  schema {
    query: MyQuery
  }

  type MyQuery {
    authors: [Author!]!
    books: [Book!]!
    users: [User!]!
  }
  type Author {
    name: String!
    photo: Image!
  }
  type Book {
    title: String!
    cover: Image!
  }
  type User {
    name: String!
    email: String!
    avatar: Avatar!
  }
  type Image {
    url: String!
  }
  type Avatar {
    image: Image!
    color: String!
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
