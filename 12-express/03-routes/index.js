const express = require('express');
const router = require('./routes/main');

const app = express();

app.use(router);

app.listen(3000, () => {
    console.log('Server was launched on port 3000');
});
