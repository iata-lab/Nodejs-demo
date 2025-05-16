const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const routes = {
  '/': 'home.html',
  '/about': 'about.html',
  '/where': 'where.html',
  '/what': 'what.html',
  '/contact': 'contact.html'
};

const server = http.createServer((req, res) => {
  const fileName = routes[req.url];
  if (fileName) {
    const filePath = path.join(__dirname, fileName);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
