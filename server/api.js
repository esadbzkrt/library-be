const express = require('express');
const app = express();
const router = express.Router();

const author=require('./controllers/authorController');
const book=require('./controllers/bookController');
const category=require('./controllers/categoryController');
const publisher=require('./controllers/publisherController');




module.exports = router;