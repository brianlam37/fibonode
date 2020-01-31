const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const fiboRouter = require('./routes/fibo');

app.use('/fibo', fiboRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});