import Books from './modules/books.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';
/* eslint-disable no-unused-vars */
import { navigateTo, menuItems } from './modules/forEachfunction.js';
/* eslint-disable no-unused-vars */

const booksContainer = document.getElementById('books-container');
const addBookForm = document.getElementById('add-book');
const title = document.getElementById('title');
const author = document.getElementById('author');

const allBooks = new Books();

const reload = () => {
  booksContainer.innerHTML = allBooks.books
    .map(
      (
        bookItem,
        index,
      ) => `<div class="book-item"><p><strong>"${bookItem.title}" by ${bookItem.author}.</strong></p>
      <button class="remove" data-id=${index}>Remove</button>
      </div>`,
    )
    .join('');
  if (allBooks.books.length === 0) {
    booksContainer.style.cssText = 'border: none;';
  } else {
    booksContainer.style.cssText = 'border: 3px black solid;';
  }

  const buttons = document.querySelectorAll('.remove');

  buttons.forEach((btn) => {
    btn.onclick = () => {
      allBooks.removeBook(btn.dataset.id);
      reload();
    };
  });
};

reload();

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  allBooks.addBook(newBook);
  title.value = '';
  author.value = '';
  reload();
});

const dateDiv = document.querySelector('.date');

const loadDate = () => {
  dateDiv.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
};

setInterval(loadDate, 1000);
