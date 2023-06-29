const http = require('http');
const express = require('express');

const app = express();

const firstHandler = (req, res, next) => {
    console.log('First handler');
    next();
};
const secondHandler = (req, res) => {
    console.log('Second handler');
    res.send('Response from express');
};

app.get('/', firstHandler, secondHandler);

app.listen(3000, () => {
    console.log('Server was launched on port 3000');
});
