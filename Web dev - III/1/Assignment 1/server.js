const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Welcome to the Smart Utility Toolkit!');
      break;
    case '/about':
      res.statusCode = 200;
      res.end('About: A Node.js core modules lab assignment.');
      break;
    case '/contact':
      res.statusCode = 200;
      res.end('Contact: smartutility@example.com');
      break;
    default:
      res.statusCode = 404;
      res.end('404 - Route Not Found');
  }

  console.log(`Response sent with status ${res.statusCode}`);
});

server.listen(PORT, () => {
  console.log(`HTTP server running at http://localhost:${PORT}`);
  console.log('Try /, /about, /contact, or an invalid route.');
});
