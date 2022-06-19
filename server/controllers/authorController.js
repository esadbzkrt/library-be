const newAuthor = async (req, res) => {
  res.json({ message: "POST new author" });
};
const getAuthor = (req, res) => {
  res.json({ message: "GET author" });
};
const getAllAuthors = (req, res) => {
  res.json({ message: "GET all authors" });
};
const updateAuthor = (req, res) => {
  res.json({ message: "PUT author" });
};
const deleteAuthor = (req, res) => {
  res.json({ message: "DELETE author" });
};
module.exports = {
  newAuthor,
  getAuthor,
  getAllAuthors,
  updateAuthor,
  deleteAuthor,
};
