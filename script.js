// Sample book data
const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction",
        description: "A story of racial injustice and the destruction of innocence in the American South."
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopian",
        description: "A dystopian novel about totalitarianism and government surveillance."
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Classic",
        description: "A portrait of the Jazz Age in all of its decadence and excess."
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Romance",
        description: "A romantic novel about the emotional development of Elizabeth Bennet."
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy",
        description: "A fantasy novel about the quest of home-loving Bilbo Baggins."
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Coming-of-age",
        description: "A story about teenage alienation and rebellion."
    },
    {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fantasy Fiction",
    description: "A shepherd boy's journey to find worldly treasure leads him to discover something far more valuable."
},
{
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    genre: "Self-help",
    description: "A guide to building good habits and breaking bad ones through tiny changes."
},
{
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: 2011,
    genre: "History",
    description: "A brief history of humankind, exploring how we came to dominate the Earth."
},
{
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    genre: "Science Fiction",
    description: "A epic tale of politics, religion, and power on the desert planet Arrakis."
},
{
    title: "The Silent Patient",
    author: "Alex Michaelides",
    year: 2019,
    genre: "Psychological Thriller",
    description: "A woman shoots her husband and then stops speaking, leaving a criminal psychotherapist to unravel the mystery."
}
];

// DOM elements
const booksContainer = document.getElementById('books-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Display all books initially
displayBooks(books);

// Search functionality
searchButton.addEventListener('click', searchBooks);
searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchBooks();
    }
});

// Function to display books
function displayBooks(booksToDisplay) {
    booksContainer.innerHTML = '';
    
    if (booksToDisplay.length === 0) {
        booksContainer.innerHTML = '<div class="no-results">No books found matching your search.</div>';
        return;
    }
    
    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
            <div class="book-details">
                <div><strong>Year:</strong> ${book.year}</div>
                <div><strong>Genre:</strong> ${book.genre}</div>
                <div><strong>Description:</strong> ${book.description}</div>
            </div>
        `;
        
        booksContainer.appendChild(bookCard);
    });
}

// Function to search books
function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
}