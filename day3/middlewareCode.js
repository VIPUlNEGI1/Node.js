const express = require('express');
const app = express();

// Simple middleware function to log request details
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware
});

// Route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// Purpose: Logs the HTTP method and URL of every incoming request.

// How It Works: When a request is received, this middleware logs the method (like GET or POST) and the URL being requested to the console. After logging, it calls next() to pass control to the next middleware function or route handler in the stack.


// ===========================usein two middleware================
const express = require('express');
// const app = express();

// First middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware
});

// Second middleware to add a custom header
app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'CustomHeaderValue');
    next(); // Pass control to the next middleware or route handler
});

// Route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
