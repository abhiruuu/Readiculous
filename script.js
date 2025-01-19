const myBooks = [];
const btn = document.querySelector(".button-area");

const cardArea = document.querySelector(".card-area");

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

function clearCardArea() {
  cardArea.innerHTML = " ";
}

function displayBooks() {
  for (let i = 0; i < myBooks.length; i++) {
    const card = document.createElement("section");
    card.classList.add("card");
    card.innerHTML = `<p class="card__title">${myBooks[i].title}</p>
            <p class="card__author"><b>Author:</b> ${myBooks[i].author}</p>
            <p class="card__pages"><b>Pages:</b> ${myBooks[i].pages}</p>
            <p class="card__readStatus"><b>Read:</b> ${myBooks[i].readStatus}</p>`;
    cardArea.appendChild(card);
  }
}

clearCardArea();
addBookToLibrary("Book Title 1", "Full Name", "500", "Not Completed");
addBookToLibrary("Book Title 2", "Full Name", "300", "Completed");
addBookToLibrary("Book Title 3", "Full Name", "200", "Completed");

displayBooks();
