const express = require('express');
const router = express.Router();

const authorController=require('./controllers/authorController');
const bookController=require('./controllers/bookController');
const categoryController=require('./controllers/categoryController');
const publisherController=require('./controllers/publisherController');

// book
router.get('/book', bookController.getAllBooks);
router.get('/book/:id', bookController.getBook);
router.post('/book',bookController.newBook);
router.put('/book/:id',bookController.updateBook);
router.delete('/book/:id',bookController.deleteBook);

// author
router.get('/author', authorController.getAllAuthors);
router.get('/author/:id', authorController.getAuthor);
router.post('/author',authorController.newAuthor);
router.put('/author/:id',authorController.updateAuthor);
router.delete('/author/:id',authorController.deleteAuthor);

//category
router.get('/category', categoryController.getAllCategories);
router.get('/category/:id', categoryController.getCategory);
router.post('/category',categoryController.newCategory);
router.put('/category/:id',categoryController.updateCategory);
router.delete('/category/:id',categoryController.deleteCategory);

//publisher
router.get('/publisher', publisherController.getAllPublishers);
router.get('/publisher/:id', publisherController.getPublisher);
router.post('/publisher',publisherController.newPublisher);
router.put('/publisher/:id',publisherController.updatePublisher);
router.delete('/publisher/:id',publisherController.deletePublisher);




module.exports = router;