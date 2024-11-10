const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc Register new User"
// @route POST /api/user/register
// @access public
const userRegister = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User Aleady registered with same email !");
  }

  //   Hash Password
  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: hashedPass,
  });

  console.log(`User Created ${newUser}`);

  if (newUser) {
    res.status(201).json({
      _id: newUser.id,
      email: newUser.email,
      message: "New User registedred successfully !",
    });
  } else {
    res.status(400);
    throw new Error("User Data is not Valid !");
  }

  res.status(201).json({
    message: "Register new User",
  });
});

// @desc Login User"
// @route POST /api/user/login
// @access public
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const isUser = await User.findOne({ email });
  if (!isUser) {
    res.status(400);
    throw new Error("User Does not Exits , pls Register first !");
  }

  if (isUser) {
    // compare the password
    if (await bcrypt.compare(password, isUser.password)) {
      //  provide access token
      const accessToken = jwt.sign(
        {
          user: {
            username: isUser.username,
            email: isUser.email,
            id: isUser.id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1m" }
      );
      res.status(200).json({
        accessToken,
      });
    } else {
      res.status(401).json({
        message: "Email or password is not valid !",
      });
    }
  }

  res.status(200).json({
    message: "Login new User",
  });
});

// @desc Current User Info"
// @route GET /api/user/current
// @access private
const userCurrent = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Current new User",
    data: req.user,
  });
});

module.exports = { userRegister, userLogin, userCurrent };
