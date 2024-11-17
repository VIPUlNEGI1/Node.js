const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('OK');
});

app.get('/created', (req, res) => {
    res.status(201).send('Resource created');
});

app.get('/not-found', (req, res) => {
    res.status(404).send('Resource not found');
});

app.get('/error', (req, res) => {
    res.status(500).send('Internal server error');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// In this example:

// We use res.status() to set the HTTP status code before sending the response.

// Different routes demonstrate different status codes for various scenarios.

// HTTP status codes are a vital part of the HTTP protocol, enabling effective communication between clients and servers about the status of requests.