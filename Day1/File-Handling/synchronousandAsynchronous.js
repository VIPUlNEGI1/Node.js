// Synchronous Programming:
// In synchronous programming, tasks are executed one after another, and each task waits for the previous one to complete before starting. This is akin to standing in line at a store; you wait for the person in front of you to finish their transaction before you can start yours.

const fs = require('fs');

// Reading a file synchronously
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

// This line will only execute after the above line has completed
console.log('File has been read');


// Asynchronous Programming:
// In asynchronous programming, tasks can be executed concurrently without waiting for previous tasks to complete. This allows multiple operations to overlap, making the program more efficient, especially for I/O operations like file reading, network requests, etc.

const fs = require('fs');

// Reading a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});

// This line will execute immediately, not waiting for the file read to complete
console.log('File read initiated');


// ===
// In this example, fs.readFile starts the file reading operation and immediately moves to the next line of code. The callback function is executed once the file is read, making the process non-blocking.



// Key Differences:
// Synchronous:

// Blocking: Each operation must complete before the next one starts.

// Simplicity: Easier to understand and reason about.

// Inefficient for I/O operations: Can cause performance bottlenecks.

// Asynchronous:

// Non-blocking: Operations can run concurrently, allowing the program to perform other tasks while waiting for I/O operations.

// Complexity: Requires handling callbacks, promises, or async/await for managing asynchronous code.

// Efficient for I/O operations: Improves performance by not waiting for each operation to complete sequentially.

// Asynchronous Patterns in Node.js:
// Callbacks:

// Functions passed as arguments to other functions, invoked after the completion of an asynchronous task.

// Promises:

// Objects representing the eventual completion (or failure) of an asynchronous operation, allowing chaining with .then() and .catch().

// Async/Await:

// Syntactic sugar over promises, making asynchronous code look synchronous for better readability.

const fs = require('fs').promises;

const readFileAsync = async () => {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
  console.log('File read completed');
};

readFileAsync();
