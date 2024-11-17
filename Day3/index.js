// This is a hybrid server because it is responsive for various devices like desktops, laptops, tablets, and non-screen devices like Alexa.

// Importing required modules
const express = require("express");
const fs= require("fs")
const app = express();
const user = require("./MOCK_DATA.json");
const PORT = 8000;
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Endpoint to get all users in JSON format (suitable for devices like Alexa)
app.get("/api/users", (req, res) => {
    return res.json(user);
});

// Endpoint to get all users in HTML format (suitable for web browsers)
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${user.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

// Endpoint to get a specific user by ID in JSON format
app.get("/api/user/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const foundUser = user.find(user => user.id === id);
    if (foundUser) {
        return res.json(foundUser);
    } else {
        return res.status(404).json({ error: "User not found" });
    }
});

// Grouped route handler for CRUD operations on a specific user by ID
app.route("/api/user/:id")
    .get((req, res) => {
        const id = parseInt(req.params.id, 10);
        const foundUser = user.find(user => user.id === id);
        if (foundUser) {
            return res.json(foundUser);
        } else {
            return res.status(404).json({ error: "User not found" });
        }
    })
    .put((req, res) => {
        // Update user logic here
        return res.json({ status: "Pending" });
    })
    .delete((req, res) => {
        // Delete user logic here
        return res.json({ status: "Pending" });
    });

// Endpoint to create a new user
app.post('/api/user', (req, res) => {
    // Create new user logic here
    const body= req.body
    res.json({ status: "Pending" });
    user.push({...body, id:user.length + 1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(user),(err,data)=>{
        return res.json({status:"success",id:user.length})
    })
});

// Endpoint to edit an existing user by ID
// Endpoint to edit an existing user by ID
app.patch('/api/user/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = user.findIndex(user => user.id === id);

    if (index !== -1) {
        user[index] = { ...user[index], ...req.body };
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", message: "Error writing to file" });
            }
            return res.json({ status: "success", message: `User with ID ${id} updated` });
        });
    } else {
        return res.status(404).json({ status: "error", message: "User not found" });
    }
});


// Endpoint to delete a user by ID

// Endpoint to delete a user by ID
app.delete('/api/user/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = user.findIndex(user => user.id === id);

    if (index !== -1) {
        user.splice(index, 1);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", message: "Error writing to file" });
            }
            return res.json({ status: "success", message: `User with ID ${id} deleted` });
        });
    } else {
        return res.status(404).json({ status: "error", message: "User not found" });
    }
});
