// what is the middleware
// Middleware in Express.jsis a crucial concept that refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. These middleware functions can perform a variety of tasks including executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function.


// according to me middleware is the function which has center of the req  and   res  this is filtter out the probleam and it control the res and req 

// forExample   if i have the pament getway and one user request the payement so the request is go to our main function(res)  but we want check the user is haker or some type of froud then we are creating the function which function we say middlewares


// Here’s a brief rundown of what middleware can do:

// Execute code: Perform any operations you need.

// Modify req and res objects: For example, parsing request bodies or adding headers to responses.

// End the request-response cycle: Send a response and stop the cycle, which means no other middleware will be executed after this.

// Call the next middleware function: Pass control to the next middleware in the stack.
