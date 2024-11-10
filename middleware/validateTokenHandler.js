const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;

  // Fix the typo in 'Authorization' header name
  let authHeader = req.headers.authorization || req.headers.AuthHeader;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1]; // Extract the token part from 'Bearer <token>'

    // Verify the JWT token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "User is not authorized" });
        return; // End the function if the token is invalid
      }

      console.log(decoded);
      // If token is valid, add the decoded information to the request object
      req.user = decoded.user;

      // Continue to the next middleware
      next();
    });
  } else {
    res
      .status(400)
      .json({ message: "Authorization header is missing or invalid" });
  }
});

module.exports = validateToken;
