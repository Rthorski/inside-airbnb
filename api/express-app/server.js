const express = require('express');
const cors = require('cors');
const citiesRoutes = require('./cities/routes');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
  }));

const port = 5001;

app.use(express.json());

app.get('/index', (req, res) => {
    res.send("hello");
});

app.use('/api/v1/cities/', citiesRoutes);


app.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
}).on("error", (err) => {
    console.error("Error", err.message);
});

module.exports = app;