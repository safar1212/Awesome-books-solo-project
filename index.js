import Books from './modules/books.js';
import { navigateTo, menuItems } from './modules/forEachfunction.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

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
    // console.log("button was presses " + btn.dataset.id);
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

/* eslint-disable no-unused-vars */
// const removeBook = (bookIndex) => {
//   allBooks.removeBook(bookIndex);
//   reload();
// };
/* eslint-disable no-unused-vars */

// Adding Navigation using JS

// const sections = document.querySelectorAll('.section');

// let makeActive = (className) => {
//   sections.forEach((item) => {
//     if (item.classList.contains(className)) {
//       item.classList.add('active');
//     } else {
//       item.classList.remove('active');
//     }
//   });
// }

// const sections = document.querySelectorAll('.section');

// const menuItems = document.querySelectorAll('.menu-item');

// const navigateTo = (className) => {
//   sections.forEach((item) => (item.classList.contains(className)
//  ? item.classList.add('active') : item.classList.remove('active')));
// };

// menuItems.forEach((menuItem) => {
//   menuItem.addEventListener('click', () => {
//     navigateTo(menuItem.dataset.section);
//   });
// });

// const loadDate = () => {
//   const dateDiv = document.querySelector('.date');
//   dateDiv.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS,);
// };

const dateDiv = document.querySelector('.date');

const loadDate = () => {
  dateDiv.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
};

setInterval(loadDate, 1000);

navigateTo();
menuItems();
