const autor = {
  fullName: "bob alice",
  books: ["book1"],

  printBooks() {
    this.books.forEach((book) => {
      document.write(book + "by" + this.fullName + "<br/>");
    });
  },
};

autor.printBooks();
