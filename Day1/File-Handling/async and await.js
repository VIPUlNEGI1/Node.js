// What is async?
// async is a keyword used to declare an asynchronous function. 
// An async function always returns a promise.

// If the function returns a value, the promise is resolved with that value.

// If the function throws an error, the promise is rejected with that error.



// What is await?
// await is a keyword used to pause the execution of an async function until a promise is resolved or rejected.

// You can only use await inside an async function.

// It makes your code wait for the promise to resolve and returns the result. If the promise is rejected, it throws the error.



// Example Without async/await (Using Promises):
// Here's how you might read a file using promises without async/await:

javascript
const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });




// Example Using async/await:
// Here's how you can do the same thing using async and await:

javascript
const fs = require('fs').promises;

const readFileAsync = async () => {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
};

readFileAsync();



// Benefits of Using async/await:

// Readability: Your asynchronous code looks more like synchronous code, making it easier to understand and maintain.


// Error Handling: You can use try...catch blocks to handle errors, just like in synchronous code.


// Avoids Callback Hell: Simplifies the structure of your code, avoiding deeply nested callbacks or .then() chains.






// Real-World Example:
// Let's say you want to fetch data from an API and then process it. Using async and await makes this straightforward:

// Without async/await (Using Promises):
// javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  })
  .catch(err => {
    console.error('Error fetching data:', err);
  });
// Using async/await:
// javascript
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('Data:', data);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

fetchData();




// Conclusion:
// async and await provide a cleaner and more intuitive way to handle asynchronous operations in JavaScript. By making asynchronous code look more like synchronous code, they help reduce complexity and improve readability.