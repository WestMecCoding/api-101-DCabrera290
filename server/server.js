const { generateKey } = require('crypto');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})


app.get('/ifrair729', (req, res) => {
    res.send('Hello, Isaac! I\'m better than you at typing! LOL!');
});