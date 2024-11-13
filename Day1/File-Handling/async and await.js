// Synchronous Tasks in Programming:
// In synchronous programming, tasks are executed one after the other. Each task must complete before the next one begins. This means that if a task takes a long time to complete, the subsequent tasks have to wait.


const db = require('database-module'); // Hypothetical database module

// Function to fetch data synchronously
const fetchData1 = () => {
  const data = db.readSync('example-database'); // This operation blocks the execution until it's done
  console.log('Data:', data);
  console.log('Processing data...');
  // Further processing...
};

fetchData1();
console.log('This line will execute after fetchData() has completed.');



// In JavaScript and Node.js, async is a keyword used to declare an asynchronous function. This function returns a Promise, allowing you to write asynchronous code in a more readable and straightforward manner. When combined with the await keyword, it enables you to handle asynchronous operations in a way that resembles synchronous code.

const fetchData3 = async () => {
  // This function is asynchronous and returns a Promise
  return 'Hello, async!';
};

fetchData3().then(message => console.log(message)); // Output: Hello, async!


// Combining async with await:

// await: The await keyword can only be used inside an async function. It pauses the execution of the function until the Promise is resolved or rejected.


const fetch = require('node-fetch'); // Assuming you have node-fetch installed

const fetchData4 = async () => {
  try {
    const response = await fetch('https://api.example.com/data'); // Pauses until the Promise is resolved
    const data = await response.json(); // Waits for the Promise to resolve and parse JSON
    console.log('Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error); // Catches any errors during the async operations
  }
};

fetchData4();
console.log('This line will execute immediately, not waiting for fetchData().');



// the simple example

let a= 10 ;
let b=20;

let result = a+b;
async function getData(){
  let resultFromServer = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log( await readFileAsync.json()) //the is for we are understand more about this function
}
getData()



// In this example:

// The fetchData function is declared as async.

// The await keyword is used to wait for the response from the fetch call and then to parse the response as JSON.

// The try...catch block handles any errors that might occur during the asynchronous operations.

// You can only use await inside an async function.

// It makes your code wait for the promise to resolve and returns the result. If the promise is rejected, it throws the error.


// Benefits of Using async/await:
// Readability: Makes asynchronous code look synchronous, improving readability and maintainability.

// Error Handling: Allows you to use try...catch blocks for error handling, just like in synchronous code.

// Simplifies Asynchronous Code: Helps avoid callback hell and complex promise chaining






// javascript
const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });

  // Summary:
  // async functions return a Promise and enable the use of await.
  
  // await pauses the execution of an async function until the awaited Promise resolves or rejects.
  
  // Together, async and await make asynchronous code easier to read and maintain.


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
