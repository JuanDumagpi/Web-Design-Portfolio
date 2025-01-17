const express = require('express') //getting the express library
const app = express() //creaters the server
const port = 3000;

app.use(express.static('public'));

app.listen(port, ()=> {
    console.log('Server running at http://localhost:${port}');
});
