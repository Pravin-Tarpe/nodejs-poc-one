const http = require('http');
const fs = require('fs');
const path = require('path');

function renderHTML(path, res) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found');
        } else{
            res.write(data);
            res.end();
        }
    })
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url == '/') {
        renderHTML('./public/views/index.html', res);
    } 
    if (req.url == '/Monday') {
        renderHTML('./public/views/monday.html', res);
    }

    if (req.url == '/Tuesday') {
        renderHTML('./public/views/tuesday.html', res);
    }

    if (req.url == '/Wednesday') {
        renderHTML('./public/views/wednesday.html', res);
    }

    if (req.url == '/Thursday') {
        renderHTML('./public/views/thursday.html', res);
    }
    if (req.url == '/Friday') {
        renderHTML('./public/views/friday.html', res);
    }
    if (req.url == '/Saturday') {
        renderHTML('./public/views/saturday.html', res);
    }
    if (req.url == '/Sunday') {
        renderHTML('./public/views/sunday.html', res);
    }

    if (req.url.match("\.js$")) {
        var jsPath = path.join(__dirname, 'public', req.url);
        console.log(jsPath);
        var fileStream = fs.createReadStream(jsPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        fileStream.pipe(res);
    }

    if (req.url.match("\.css$")) {
        var cssPath = path.join(__dirname, 'public', 'css', req.url);
        console.log(cssPath);
        var fileStream = fs.createReadStream(cssPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fileStream.pipe(res);
    }
})

server.listen(3000);