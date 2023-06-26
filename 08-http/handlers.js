const fs = require('fs');
const qs = require('querystring');
const comments = require('./data.js');

const getHome = (req, res) => {
    fs.readFile('./files/comment-form.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/html');
            res.end('Server error while loading HTML file');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
};

const getHTML = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><div>');
    res.write('<h1>Greetings from the HTTP server!</h1>');
    res.write('</div></body></html>');
    return res.end();
};

const getText = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('This is plain text');
};

const getComments = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(comments));
};

const postComment = (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const comment = qs.parse(body);
                comment.id = parseInt(comment.id);
                comments.push(comment);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>Comment data was received</h1>');
                res.write('<a href="/">Submit one more comment</a>');
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid Form data');
            }
        });
    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = '';
        req.on('data', (chunk) => (commentJSON += chunk));

        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON));
                res.statusCode = 200;
                res.end('Comment data was received');
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid JSON');
            }
        });
    } else {
        res.statusCode = 400;
        res.end('Data must be in the JSON format or as form');
    }
};

const handleNotFound = (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    return res.end('<h1>Page not found</h1>');
};

module.exports = {
    getHTML,
    getHome,
    getText,
    getComments,
    postComment,
    handleNotFound,
};
