const myLibrary = [
  {
    title: 'Interesting Book Title',
    pageCount: 186,
    readStatus: false,
  },
  {
    title: 'Book Title',
    pageCount: 99,
    readStatus: false,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
    readStatus: true,
  },
  {
    title: 'Documentation',
    pageCount: 25,
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
    document.querySelector('submit-button')
    
    alert('book added!');
  } else {
    alert('missing fields');
  }
  showBooks();
};

const createCard = (book, i) => {
  const cardContainer = document.createElement('li');
  const cardTitle = document.createElement('p');
  const cardPageCount = document.createElement('p');
  const cardReadStatus = document.createElement('input');
  const cardReadStatusLabel = document.createElement('label');
  const deleteButton = document.createElement('button');

  cardContainer.classList.add('list-item');

  cardContainer.setAttribute('data-book-id', i);
  cardReadStatus.setAttribute('type', 'checkbox');
  deleteButton.dataset.bookId = i;
  cardContainer.dataset.bookId = i;

  cardContainer.style.display = 'grid';
  cardContainer.style.padding = '8px';
  cardContainer.style.border = '2px solid black';
  cardContainer.style.borderRadius = '10px';
  // cardContainer.children.style.background = 'white';
  cardTitle.style.background = 'lightgray';
  cardPageCount.style.background = 'lightgray';
  cardReadStatus.style.background = 'lightgray';

  cardReadStatus.checked = book.readStatus;
  cardReadStatusLabel.textContent = `Finished reading? ${
    cardReadStatus.checked ? 'Yes' : 'No'
  }`;
  cardContainer.style.backgroundColor = cardReadStatus.checked
    ? 'lightgreen'
    : 'pink';
  cardReadStatus.onclick = () => {
    cardReadStatusLabel.textContent = `Finished reading? ${
      cardReadStatus.checked ? 'Yes' : 'No'
    }`;
    cardContainer.style.backgroundColor = cardReadStatus.checked
      ? 'lightgreen'
      : 'pink';
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
  cardContainer.append(cardReadStatusLabel);
  cardContainer.append(deleteButton);
};

const showBooks = () => {
  list.innerHTML = '';
  myLibrary.map((book, i) => {
    createCard(book, i);
  });
};

showBooks();
console.log(myLibrary);
