const lunr = require("lunr");

function initBookIndex(db) {
  return lunr(function () {
    this.ref("id");
    this.field("title");
    this.field("description");

    db.getAllBooks().forEach(function (book) {
      this.add(book);
    }, this);
  });
}

class Search {
  constructor(db) {
    this.db = db;
    this.bookIndex = initBookIndex(this.db);
  }

  findBooks(searchQuery) {
    const results = this.bookIndex.search(searchQuery);
    const foundIds = results.map((result) => result.ref);
    return foundIds.map(this.db.getBookById);
  }
}

module.exports = {
  Search,
};
