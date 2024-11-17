const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Define a schema and model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Function to create a new user
const createUser = async () => {
  const user = new User({
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  });

  try {
    const savedUser = await user.save();
    console.log('User created:', savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

// Call the function to create a user
createUser();
