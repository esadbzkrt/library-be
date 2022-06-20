const db = require("../../models/");
const { Book } = require("../../models/");


const newBook = async (req, res) => {
  const { bookName, author, category, publisher } = req.body;
  
  try {
    const book = await Book.create({
        bookName,
        author,
        category,
        publisher
    });
    res.json(book);
    const res = await book.save();
    console.log(book);
  } catch (error) {
    //console.log(book);
   console.log("error", error);
  }
};

const getBook = (req, res) => {
  
};

const getAllBooks = (req, res) => {
  res.json({ message: "GET all books" });
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
