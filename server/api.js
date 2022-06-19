const express = require('express');
const app = express();
const router = express.Router();

const author=require('./controllers/author');
const book=require('./controllers/book');
const category=require('./controllers/category');
const publisher=require('./controllers/publisher');

app.use('/author',author);
app.use('/book',book);
app.use('/category',category);
app.use('/publisher',publisher);



module.exports = router;