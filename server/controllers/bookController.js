const { Book } = require("../../models/");

const newBook = async (req, res) => {
  const { bookName, author, category, publisher } = req.body;
  try {
    const book = new Book({
        bookName,
        author,
        category,
        publisher
    });
    await book.save();
    res.send(book);
  } catch (error) {
   console.log("error", error);
  }
};

const getBook = (req, res) => {
  res.json({ message: "GET book" });
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    console.log(books);
    res.send(books);
  }
  catch (error) {
    console.log("error", error);
  }
};

const updateBook = (req, res) => {
  res.json({ message: "PUT book" });
};

const deleteBook = (req, res) => {
  res.json({ message: "DELETE book" });
};

module.exports = {
  newBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
};
