const express = require('express');
const app = express();

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} Request to ${req.url}`);
    next();
});

// Middleware for authentication
app.use((req, res, next) => {
    const auth = req.headers.authorization;
    if (auth === 'secret-token') {
        next(); // User is authenticated, proceed to the next middleware or route handler
    } else {
        res.status(401).json({ message: 'Unauthorized' }); // User is not authenticated, send a 401 response
    }
});

// Middleware for error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' }); // Send a 500 response for errors
});

// Route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



// Explanation


// Logging Middleware

// Logs the date, time, HTTP method, and URL of each request.

// Helps in tracking the incoming requests and debugging.

// Authentication Middleware

// Checks for an Authorization header with a specific token (secret-token).

// If the token matches, it allows the request to proceed to the next middleware or route handler.

// If the token does not match, it sends a 401 Unauthorized response.

// Error Handling Middleware

// Catches errors that occur in the middleware stack or route handlers.

// Logs the error stack and sends a 500 Internal Server Error response.

// Important for managing errors and maintaining a smooth user experience.

// Route Handler

// Simple route handler that responds with "Hello World!" when the root URL (/) is accessed.

// Starting the Server

// Starts the server on port 3000 and logs a message to the console.