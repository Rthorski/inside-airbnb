const express = require('express');
const citiesRoutes = require('./cities/routes');

const app = express();

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