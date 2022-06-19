const express = require('express');
const app = express();
const router = express.Router();

const authorController=require('./controllers/authorController');
const bookController=require('./controllers/bookController');
const categoryController=require('./controllers/categoryController');
const publisherController=require('./controllers/publisherController');




module.exports = router;