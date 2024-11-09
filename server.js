const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const msg = {
    message: "HomeRouteTesing",
    staus: 200,
  };

  res.status(200).json(msg);
});

// api routes
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`Starting the server on port ${port}`);
  console.log(`http://localhost:5000/`);
});
