// const http = require('http');
// const {
//     getHTML,
//     getText,
//     getComments,
//     getHome,
//     handleNotFound,
//     postComment,
// } = require('./handlers');

// const PORT = 5000;

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         return getHome(req, res);
//     }
//     if (req.method === 'GET' && req.url === '/html') {
//         return getHTML(req, res);
//     }
//     if (req.method === 'GET' && req.url === '/text') {
//         return getText(req, res);
//     }
//     if (req.method === 'GET' && req.url === '/comments') {
//         return getComments(req, res);
//     }
//     if (req.method === 'POST' && req.url === '/comments') {
//         return postComment(req, res);
//     }

//     handleNotFound(req, res);
// });

// server.listen(PORT, () => {
//     console.log(`Server was launched on ${PORT}`);
// });

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/http') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Greeting from the HTTP Server!</h1>');
    }
});

server.listen(PORT, () => console.log(`Server was launched on port ${PORT}`));
