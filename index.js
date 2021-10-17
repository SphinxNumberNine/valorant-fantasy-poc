const express = require('express');
const port = process.env.port || 5000;

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
// apply middleware

// require routes from routes folder

app.get("/", (req, res) => {
    res.status(200).send("Hello World!")
})

app.listen(port)