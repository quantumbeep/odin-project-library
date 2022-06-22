const myLibrary = [
  {
    title: 'Book 1',
    pageCount: 20,
    readStatus: false,
  },
  {
    title: 'Book 2',
    pageCount: 88,
    readStatus: true,
  },
];

const Book = (title, pageCount, readStatus) => {
  this.title = title;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
};

const addBookToLibrary = (title, pageCount) => {
  const book = new Book(title, pageCount);
  console.log(`Created Book object: ${book}`);
  myLibrary.push(book);
  console.log(`Current library: ${myLibrary}`);
};

const showBooks = () => {
  const list = document.querySelector('.list');
  myLibrary.map((book) => {
    console.log(book);
    const item = document.createElement('li');
    list.appendChild(item);
    const bookData = document.createTextNode(
      `${book.title} ${book.pageCount} ${book.readStatus}`
    );
    item.appendChild(bookData);
  });
};

const newBook = () => {
  const body = document.querySelector('body');
  const form = document.createElement('form');
  body.appendChild(form);
  const titleInput = document.createElement('input');
  const pageInput = document.createElement('input');
  const readInput = document.createElement('input');
  const titleLabel = document.createElement('label');
  const pageLabel = document.createElement('label');
  const readLabel = document.createElement('label');
  titleInput.setAttribute('type', 'text');
  pageInput.setAttribute('type', 'text');
  readInput.setAttribute('type', 'text');
  const instructions = document.createTextNode(
    "To add a book, fill out the book details below. Then click 'Add Book'"
  );

  form.appendChild(instructions);
  form.appendChild(titleInput);
  form.appendChild(pageInput);
  form.appendChild(readInput);
  form.appendChild(titleLabel);
  form.appendChild(pageLabel);
  form.appendChild(readLabel);
};
