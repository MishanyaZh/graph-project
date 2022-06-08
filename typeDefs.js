const { gql } = require("apollo-server");
const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    authors: [Author!]!
    author(id: Int!): Author
    books: [Book!]!
    book(id: Int!): Book
    users: [User!]!
    user(id: Int!): User
  }
  type Author {
    id: Int!
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
    id: Int!
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
