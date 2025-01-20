const myBooks = [];
const btn = document.querySelector(".add-button");

const cardArea = document.querySelector(".card-area");

const bookFormContainer = document.querySelector(".book-form-container");
const bookForm = document.querySelector("#book-form");

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
clearCardArea();

function displayBooks() {
  clearCardArea();
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

btn.addEventListener("click", () => {
  bookFormContainer.style.display = "flex";
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const readStatus = document.querySelector("#readStatus").value;

  addBookToLibrary(title, author, pages, readStatus);

  bookForm.reset();
  bookFormContainer.style.display = "none";

  displayBooks();

  console.log(cardArea);
});
