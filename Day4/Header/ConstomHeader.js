// Built-in Headers
// Built-in headers, also known as standard headers, are predefined headers that are part of the HTTP/1.1 specification. These headers are commonly used for conveying important information about the HTTP request or response. Here are a few examples:

// Content-Type: Indicates the media type of the resource (e.g., text/html, application/json).

// User-Agent: Contains information about the user agent (e.g., browser type, operating system).

// Authorization: Contains credentials for authenticating the client with the server.

// Accept: Specifies the media types that are acceptable for the response.

// Host: Specifies the host and port number of the server to which the request is being sent.

// Cookie: Contains stored HTTP cookies associated with the domain.

// Custom Headers
// Custom headers are user-defined headers that are not part of the standard HTTP specification. They allow developers to add additional metadata to requests and responses for various purposes, such as authentication, debugging, or application-specific information. Custom headers typically have a prefix of X- to differentiate them from standard headers, although this prefix is no longer strictly required. Here are some examples:

// X-Request-ID: A unique identifier for the request, used for tracking and debugging.

// X-Custom-Header: Any custom information that the developer wants to include.

// X-Api-Version: Indicates the version of the API being used.

// Examples in Express
// Setting a Built-in Header:


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: 'Hello World!' }));
});
// Setting a Custom Header:


app.get('/', (req, res) => {
    res.setHeader('X-Custom-Header', 'MyCustomValue');
    res.send('Hello World with custom header!');
});
// Both built-in and custom headers play important roles in HTTP communication, providing a flexible way to pass additional information between the client and server.






// what is the http hader

// Types of HTTP Headers
// Request Headers: These headers are sent from the client to the server, providing information about the request.



// Content-Type: Indicates the media type of the resource (e.g., application/json).

// Authorization: Contains credentials to authenticate the client with the server.

// User-Agent: Provides information about the client software making the request.

// Response Headers: These headers are sent from the server to the client, providing information about the response.

// Common Examples:
// 
// Content-Type: Indicates the media type of the response (e.g., text/html).

// Set-Cookie: Instructs the client to store a cookie.

// Cache-Control: Provides directives for caching mechanisms in both requests and responses.

// Examples of HTTP Headers
// Request Header Example:


// GET /index.html HTTP/1.1
// Host: www.example.com
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
// Accept-Language: en-US,en;q=0.5


// Response Header Example:



// HTTP/1.1 200 OK
// Date: Sun, 17 Nov 2024 08:57:00 GMT
// Content-Type: text/html; charset=UTF-8
// Content-Length: 1024
// Set-Cookie: sessionId=abc123; Path=/; HttpOnly

// How to Use Headers in Express



// Setting a Response Header:
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: 'Hello World!' }));
});




// Reading a Request Header:


app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];
    res.send(`Your user-agent is: ${userAgent}`);
});
