const http = require('http');
const fs = require('fs');
const url = require('url');

const pages = {
  '/': 'home.html',
  '/about': 'about.html',
  '/contact': 'contact.html',
  '/services': 'services.html'
};

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pages[pathname]) {
    fs.readFile(pages[pathname], (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else {
    fs.readFile('404.html', (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
      } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  }
}).listen(3000, () => {
  console.log('Server running on port 3000');
});