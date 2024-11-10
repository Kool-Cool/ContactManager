const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const dotenv = require("dotenv").config();

const app = express();
connectDb();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const msg = {
    message: "HomeRouteTesing",
    staus: 200,
  };

  res.status(200).json(msg);
});

// api routes
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

// middlerware
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Starting the server on port ${port}`);
  console.log(`http://localhost:${port}/`);
});
