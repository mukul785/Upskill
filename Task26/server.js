const http = require('http');
const { createServer } = require('http');
const {readFileSync} = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url==='/' || req.url==='/home'){ //for home navigation
        res.statusCode = 200;
        const data = readFileSync(path.join(__dirname, 'html', 'home.html'));
        res.end(data.toString());
    }
    else if(req.url==='/contact'){ //for contact navigation
        res.statusCode = 200;
        const data = readFileSync(path.join(__dirname, 'html', 'contact.html'));
        res.end(data.toString());
    }
    else if(req.url==='/about'){ //for about navigation
        res.statusCode = 200;
        const data = readFileSync(path.join(__dirname, 'html', 'about.html'));
        res.end(data.toString());
    }
    else{ //for error handling
        res.statusCode = 404;
        const data = readFileSync(path.join(__dirname, 'html', '404.html'));
        res.end(data.toString());
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
