# Web Dev III – Lab Assignment 1

## Smart Utility Toolkit

This project implements the five required Node.js core-module tasks from Lab Assignment 1.

### Files

- `calculator.js` – CLI calculator using `process.argv`
- `isEven.js` – reusable custom module using `module.exports`
- `moduleDemo.js` – imports the custom module using `require()`
- `server.js` – HTTP server using `http` with `/`, `/about`, `/contact`, and 404 routing
- `fileManager.js` – create, read, update, and delete using `fs`
- `dice.js` – secure random dice generator using `crypto`

### Run commands

```bash
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
node moduleDemo.js
node server.js
node fileManager.js
node dice.js 5
```

For the server, open these in a browser after starting it:

- `http://localhost:3000/`
- `http://localhost:3000/about`
- `http://localhost:3000/contact`
- `http://localhost:3000/anything` (404)

## Requirements followed

- No external npm packages
- No Express.js
- No database
- Node.js built-in modules only
