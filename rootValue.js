const db = require("./db");

// console.log("a book", db.getBookById(2));
// console.log("ALL book", db.getAllBooks());

const rootValue = () => {
  return {
    books: db.getAllBooks(),
    authors: db.getAllAuthors(),
    users: db.getAllUsers(),
  };
};

module.exports = rootValue;
