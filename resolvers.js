const toDbId = (externalId) => Buffer.from(externalId, "base64").toString();
const toExternalId = (dbId) => Buffer.from(dbId).toString("base64");

const resolvers = {
  Query: {
    books: (rootValue, { searchQuery }, { db, search }) =>
      searchQuery.length > 0 ? search.findBooks(searchQuery) : db.getAllBooks(),
    authors: (rootValue, args, { db }) => db.getAllAuthors(),
    users: (rootValue, args, { db }) => db.getAllUsers(),
    book: (rootValue, { id }, { db }) => db.getBookById(toDbId(id)),
    author: (rootValue, { id }, { db }) => db.getAuthorById(toDbId(id)),
    user: (rootValue, { id }, { db }) => db.getUserById(toDbId(id)),
  },
  Book: {
    id: (book) => toExternalId(book.id),
    author: (book, args, { db }) => db.getAuthorById(book.authorId),
    cover: (book) => ({
      path: book.coverPath,
    }),
  },
  Author: {
    id: (author) => toExternalId(author.id),
    books: (author, args, { db }) => author.bookIds.map(db.getBookById),
    photo: (author) => ({
      path: author.photoPath,
    }),
  },
  Avatar: {
    image: (avatar) => ({
      path: avatar.imagePath,
    }),
  },
  Image: {
    url: (image, args, { baseAssetsUrl }) => baseAssetsUrl + image.path,
  },
  User: {
    id: (user) => toExternalId(user.id),
  },
};

module.exports = resolvers;
