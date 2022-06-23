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
    const PAGE_SIZE = 5;
    const page = parseInt(req.query.page) || 1;
    const totalPages = await Book.count();
    const books = await Book.findAndCountAll({
      limit: PAGE_SIZE,
      offset: PAGE_SIZE * (page - 1)
    });
   // console.log(books);
    res.send({
      totalPageNumber:Math.ceil(totalPages / PAGE_SIZE),
      books,
      page
    });
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
