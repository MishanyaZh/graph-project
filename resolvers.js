const decodeBase64 = (base64String) =>
  Buffer.from(base64String, "base64").toString();
const encodeBase64 = (rawString) => Buffer.from(rawString).toString("base64");

const toExternalId = (dbId, type) => encodeBase64(`${type}-${dbId}`);
const toTypeAndDbId = (externalId) => decodeBase64(externalId).split("-", 2);
const toDbId = (externalId) => toTypeAndDbId(externalId)[1];

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
    id: (book) => toExternalId(book.id, "Book"),
    author: (book, args, { db }) => db.getAuthorById(book.authorId),
    cover: (book) => ({
      path: book.coverPath,
    }),
  },
  Author: {
    id: (author) => toExternalId(author.id, "Author"),
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
    id: (user) => toExternalId(user.id, "User"),
  },
};

module.exports = resolvers;
