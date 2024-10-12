const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());

// CORS
app.use(cors());

//creating the routes
app.use('/api', require('./Routes/testapi'));

//middleware
// app.use('/api', require('./middleware/protectData'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});