const db = require("../../models/");
const { Book } = require("../../models/");
const {Request, Response} = require('express');


const newBook = async (req, res) => {
  const { bookName, author, category, publisher } = req.body;
  
  try {
    const book = new Book({
        bookName,
        author,
        category,
        publisher
    });
    resp=await book.save();
    res.send(resp);
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
