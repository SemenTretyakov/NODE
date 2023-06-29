const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Response from the server');
});

app.listen(3000, () => {
    console.log('Server was launched on port 3000');
});
