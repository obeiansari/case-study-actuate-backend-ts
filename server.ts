const express = require('express');
import books from './data/Book.json'

const app = express();

const port = 3000;
console.log(books)
app.listen(port, () => {
    console.log(`Server running on PORT ${port}`)
})