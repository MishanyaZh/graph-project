const { gql } = require("apollo-server");
const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    authors: [Author!]!
    books: [Book!]!
    users: [User!]!
    book(id: Int!): Book
  }
  type Author {
    name: String!
    photo: Image!
    books: [Book!]!
    bio: String!
  }
  type Book {
    id: Int!
    title: String!
    cover: Image!
    description: String!
    author: Author!
  }
  type User {
    name: String!
    email: String!
    info: String!
    avatar: Avatar!
  }
  type Image {
    url: String!
  }
  type Avatar {
    image: Image!
    color: String!
  }
`;

module.exports = typeDefs;
