const express = require('express');
const app = express();

//startup files
require('./middlewares/coremiddlewares')(app);
require('./startup/db')();

//required files
const blogRoute = require('./routes/blogs');

//using routes
app.use('/api/blog', blogRoute);




app.listen(8080, err => err ? console.log(err) : console.log('listening at 8080'));