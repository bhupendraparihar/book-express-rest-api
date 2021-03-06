const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if(process.env.ENV === 'Test') {
    console.log('This is a test');
    const db = mongoose.connect('mongodb://localhost:27017/booksAPI_Test');
} else {
    console.log('This is for production environment');
    const db = mongoose.connect('mongodb://localhost:27017/booksAPI');
}
const port = process.env.PORT || 3000;

const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my Nodemon API');
});

app.server = app.listen(port, () => {
    console.log('Runninn on port ' + port);
});

module.exports = app;
