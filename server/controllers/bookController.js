const newBook = async (req, res) => {
  res.json({ message: "POST new tea" });
};

const getBook = (req, res) => {
  res.json({ message: "GET book" });
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
