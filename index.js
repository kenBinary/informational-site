var http = require('http');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer((req, res) => {
  console.log(req)
  if (req.url === '/') {
    fs.readFile('index.html', function (err, data) {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end;
    });
  }
  else if (req.url === '/about') {
    fs.readFile('about.html', function (err, data) {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end;
    });
  }
  else if (req.url === '/contact-me') {
    fs.readFile('contact-me.html', function (err, data) {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end;
    });
  }
  else {
    fs.readFile('404.html', function (err, data) {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end;
    });
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});