class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {

  addBookToList(book) {
    const list = document.getElementById('book-list');

    // Create tr element
    const row = document.createElement('tr');
    
    // Insert columns
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href ="#" class="delete">x</a></td>
    `
    list.appendChild(row);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  showAlert(msg, className) {
    // Create div 
    const div = document.createElement('div');
    // Add class name
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(msg));
    // Get parent
    const container = document.querySelector('.container');
    // Get existing form 
    const form = document.querySelector('#book-form');
    // Insert created div before the existing form
    container.insertBefore(div, form);

    // Clear after 3 sec
    const removeAlert = function() {
      document.querySelector('.alert').remove(); 
    };

    setTimeout(removeAlert, 1000);
  }
  
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

}

// Local Storage
class Storage {

  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
      
    }

    return books;
  }
  
  static displayBooks(){
    const books = Storage.getBooks();

    books.forEach(function(book){
      const ui = new UI();

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book){
    const books = Storage.getBooks();
    
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn){
    const books = Storage.getBooks();

    books.forEach(function(book, index){
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
      
      localStorage.setItem('books', JSON.stringify(books));

      return;
    });
  
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Storage.displayBooks);

// Event Listeners to add book
document.getElementById('book-form').addEventListener('submit', 
  function(e){

    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Instantiate a book Object
    const book = new Book(title, author, isbn);

    // Instantiate a UI Object
    const ui = new UI();

    // Validate
    if (title === '' || author === '' || isbn === '') {
      // Error alert;
      ui.showAlert('Please fill in all fields', 'error');
    } else {
      // Add book to list
      ui.addBookToList(book);

      // Add to local storage
      Storage.addBook(book);

      // Show success message
      ui.showAlert('Book added!', 'success');

      // Clear fields
      ui.clearFields();
    }

    

    
    e.preventDefault();
});

// Event Listeners to delete book
document.getElementById('book-list').addEventListener('click', function (e) {
  
  // Instantiate a UI Object
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Remove from local storage. target = <a>, target.parentElement = <td>
  const lastTD = e.target.parentElement
  const isbn = lastTD.previousElementSibling.textContent;
  Storage.removeBook(isbn);

  // Show success message
  ui.showAlert('Book removed!', 'success');

  

  e.preventDefault();
})