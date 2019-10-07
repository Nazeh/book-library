const myLibrary = [];


// App Logic

function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// populate temporarily

for (let i = 0; i < 10; i++) {
    pages = [121, 232, 100, 200, 1342, 141, 3141, 123, 100, 109];
    let book = new Book(`title ${i}`, `author ${i}`, pages[i]);
    addBookToLibrary(book)
}

// Dom Manipulation

function render() {
    let html = "";
    for (let book of myLibrary) {
        html += renderBook(book);
    }
    document.getElementById('table').innerHTML = html;
}

function renderBook(book) {
    let html = "<tr>";
    for (let data in book) {
        html += `<td>${book[data]}</td>`;
    }
    return html + "</tr>"
}

function listen(){
    const addBook = document.getElementById('add-book');
    addBook.addEventListener("click", function(e) {
        document.getElementById("new-book").classList.toggle("hide")
    })
}

render()
listen()


