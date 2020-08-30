const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('backend is working');
});

app.listen(8080, err => err ? console.log(err) : console.log('listening at 8080'));