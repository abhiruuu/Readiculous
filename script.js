const myBooks = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  let newBook = new Book(title, author, pages, readStatus);
  myBooks.push(newBook);
}

function displayBooks() {
  for (let i = 0; i < myBooks.length; i++) {
    console.log(myBooks[i]);
  }
}

addBookToLibrary("Harry Potter", "J.K. Rowling", 226, "Completed");
addBookToLibrary("Harry", "Rowling", 276, "Not Completed");
addBookToLibrary("Potter", "J.K.", 206, "Want to Read");

displayBooks();
