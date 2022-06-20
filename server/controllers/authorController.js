const { Author } = require("../../models/");


const newAuthor = async (req, res) => {
  const { authorName} = req.body;
  try {
    const author = new Author({
        authorName
    });
    await author.save();
    res.send(author);
  } catch (error) {
    console.log("error", error);
  }
};
const getAuthor = (req, res) => {
  res.json({ message: "GET author" });
};

const getAllAuthors = async (req, res) => {
  try {
  const authors = await Author.findAll();
  res.send(authors);
  } catch (error) {
    console.log("error", error);
  }
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
