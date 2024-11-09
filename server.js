console.log("This is express project \nStarting the server")


const express = require("express");
const dotenv = require("dotenv");
const app = express();

const port = 5000;



// Define a GET route for the home path
app.get("/", (req, res) => {
    res.send("This is Express project. \nTesting. \n chore:setup");
});


app.listen(port , ()=>{
    console.log(`Starting the server on port ${port}`);
})