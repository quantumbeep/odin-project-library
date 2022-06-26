const myLibrary = [
  {
    title: 'Interesting Book Title',
    pageCount: 186,
    readStatus: false,
  },
  {
    title: 'Book Title',
    pageCount: 186,
    readStatus: false,
  },
  {
    title: 'Interesting  Title',
    pageCount: 186,
    readStatus: true,
  },
];

function Book(title, pageCount, readStatus) {
  this.title = title;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  this.bookId = bookId;
  this.setRead = function () {
    console.log('setting read status..');
    this.readStatus.checked = !readStatus.checked;
  };
}

//assign html elements
const form = document.querySelector('form');
const inputWrapper = document.querySelector('.input-wrapper');
const list = document.querySelector('.list');
const listItem = document.querySelector('.list-item');
const titleEl = document.querySelector('#title');
const pageCountEl = document.querySelector('#pageCount');
const readStatusEl = document.querySelector('#readStatus');

//modal
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal-button');
const closeButton = document.querySelector('.close-button');

modalButton.onclick = () => {
  modal.style.display = 'block';
};

closeButton.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

const clearForm = () => {
  const form = document.querySelector('form');
  form.reset();
};

const addBook = () => {
  //get book data from form inputs
  title = titleEl.value;
  pageCount = pageCountEl.value;
  readStatus = readStatusEl.checked;
  bookId = myLibrary.length;

  if (title && pageCount) {
    const book = new Book(title, pageCount, readStatus);
    console.log(`Created Book object: ${book}`);
    myLibrary.push(book);
    console.log(`Current library: ${myLibrary}`);
    clearForm();
    alert('book added!');
  } else {
    alert('missing fields');
  }
  showBooks();
};

const createCard = (book, i) => {
  const cardContainer = document.createElement('li');
  cardContainer.setAttribute('data-book-id', i);
  const cardTitle = document.createElement('p');
  const cardPageCount = document.createElement('p');
  const cardReadStatus = document.createElement('input');
  const cardReadStatusLabel = document.createElement('label');
  cardReadStatus.setAttribute('type', 'checkbox');
  const deleteButton = document.createElement('button');
  deleteButton.dataset.bookId = i;
  cardContainer.dataset.bookId = i;

  cardContainer.style.display = 'grid';
  cardContainer.style.padding = '5px';
  cardContainer.style.border = '2px solid black';
  cardContainer.style.borderRadius = '1rem';
  cardTitle.style.background = 'lightgray';
  cardPageCount.style.background = 'lightgray';
  cardReadStatus.style.background = 'lightgray';
  cardReadStatus.checked = book.readStatus;
  cardReadStatusLabel.textContent = cardReadStatus.checked ? 'Yes' : 'No';
  cardReadStatus.onclick = () => {
    cardReadStatusLabel.textContent = cardReadStatus.checked ? 'Yes' : 'No';
  };

  cardTitle.textContent = book.title;
  cardPageCount.textContent = `Pages: ${book.pageCount}`;

  deleteButton.textContent = 'DELETE';

  deleteButton.onclick = () => {
    const itemToDelete = document.querySelector(`[data-book-id="${i}"]`);
    itemToDelete.remove();
  };

  list.append(cardContainer);
  cardContainer.append(cardTitle);
  cardContainer.append(cardPageCount);
  cardContainer.append(cardReadStatus);
  cardContainer.append(deleteButton);
  cardContainer.append(cardReadStatusLabel);
};

const showBooks = () => {
  list.innerHTML = '';
  myLibrary.map((book, i) => {
    createCard(book, i);
  });
};

showBooks();
