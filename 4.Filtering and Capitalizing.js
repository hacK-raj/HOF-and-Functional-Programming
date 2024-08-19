const books = [
  { title: "Book One", author: "John Doe", year: 2008 },
  { title: "Book Two", author: "Jane Smith", year: 2012 },
  { title: "Book Three", author: "Emily Davis", year: 2015 },
];

const recentBooks = books
  .filter((book) => book.year > 2010)
  .map((book) => ({
    ...book,
    author: book.author.toUpperCase(),
  }));

console.log(recentBooks);
