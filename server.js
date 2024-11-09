const express = require("express");
const dotenv = require("dotenv");



const app = express();

const port = process.env.PORT  || 5000;


app.get("/", (req, res) => {
    res.send("This is Express project. \nTesting. \n chore:setup");
});

app.get("/api/contacts", (req, res) => {
    const contacts = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Sam Green", email: "sam@example.com" }
    ];


    res.status(200).json(contacts);
});


app.listen(port , ()=>{
    console.log(`Starting the server on port ${port}`);
})