// whatis file handling
// File handling refers to the process of working with files in a computer system, including creating, reading, writing, and closing them. It is a fundamental aspect of programming and allows you to store and retrieve data from files on the disk. In Node.js, file handling is primarily done using the built-in fs (file system) module.

// importing the fs
const fs = require('fs');

// Create and write to a new file
fs.writeFileSync('example.txt', 'Hello, world!', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File created and written successfully!');
  }
});




// Read data from a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});




// Append data to an existing file
fs.appendFile('example.txt', '\nAppended content.', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Content appended successfully!');
  }
});

// const fs = require('fs');

// // Delete a file
// fs.unlink('example.txt', (err) => {
//   if (err) {
//     console.error('Error deleting file:', err);
//   } else {
//     console.log('File deleted successfully!');
//   }
// });


// get the file status
console.log(fs.statSync("example.txt"))

