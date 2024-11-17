// what is hadder 

// in simple word the header is used to send the meta data clind to server and server to client

// In Node.jsand Express, a header refers to an HTTP header, which is a key-value pair sent by the client to the server (request headers) and by the server to the client (response headers). Headers are used to convey information about the HTTP request or response, such as content type, content length, authentication tokens, cookies, and more.


// Request Headers
// These are sent by the client (e.g., a browser) to the server to provide information about the request. Common examples include:

// Content-Type: Indicates the media type of the resource, such as application/json or text/html.

// Authorization: Contains credentials for authenticating the client with the server.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.set('X-Custom-Header', 'CustomHeaderValue');
    res.send('Hello World with custom headers!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



// Response Headers
// These are sent by the server to the client to provide information about the response. Common examples include:

// Content-Type: Indicates the media type of the response body.

// Set-Cookie: Instructs the client to store cookies.

const express = require('express');
const app1 = express();

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];
    res.send(`Your user-agent is: ${userAgent}`);
});

app1.listen(3000, () => {
    console.log('Server is running on port 3000');
});







// In this example, the middleware checks if the Authorization header is present. If it is, the request proceeds to the route handler; if not, a 401 Unauthorized response is sent.
const express = require('express');
const app3 = express();

// Middleware to check for Authorization header
app3.use((req, res, next) => {
    const auth = req.headers.authorization;
    if (auth) {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(401).send('Authorization header missing');
    }
});

app3.get('/', (req, res) => {
    res.send('Hello, authenticated user!');
});

app3.listen(3000, () => {
    console.log('Server is running on port 3000');
});
