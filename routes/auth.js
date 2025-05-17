// // const express = require("express");
// // const router = express.Router();
// // const User = require("../models/User");
// // const bcrypt = require("bcrypt");

// // //Register
// // router.post("/", async (req, res) => {
// //   const { username, email, phone, password } = req.body;

// //   try {
// //     const newUser = new User({ username, email, phone, password });
// //     await newUser.save();
// //     res.status(200).json({ message: "User registered successfully" });
// //   } catch (err) {
// //     console.error("Error saving user:", err);
// //     res.status(500).json({ message: "Server error while registering" });
// //   }
// // });

// const express = require('express');
// const mongoose = require('mongoose');
// const User = require('../models/User');  // Assuming you have a User model

// const router = express.Router();

// router.post('/signup', async (req, res) => {
//   const { username, email, phone, password } = req.body;

//   try {
//     // Check if the user already exists based on email
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User with this email already exists." });
//     }

//     // Create a new user if not already registered
//     const newUser = new User({ username, email, phone, password });
//     await newUser.save();

//     res.status(200).json({ message: "Registration successful!" });
//   } catch (err) {
//     console.error("Error during registration:", err);
//     res.status(500).json({ message: "Server error, please try again later." });
//   }
// });

// module.exports = router;



// // POST /login
// // router.post("/", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const existingUser = await User.findOne({ email });

// //     if (!existingUser) {
// //       return res.status(401).json({ success: false, message: "User not found" });
// //     }

// //     const isPasswordValid = await bcrypt.compare(password, existingUser.password);

// //     if (!isPasswordValid) {
// //       return res.status(401).json({ success: false, message: "Invalid password" });
// //     }

// //     return res.json({ success: true, message: "Login successful", user: existingUser });
// //   } catch (error) {
// //     console.error("Login error:", error);
// //     res.status(500).json({ success: false, message: "Server error" });
// //   }
// // });

// module.exports = router;


const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');


router.post("/", async (req, res) => {
  const { username, email, phone, password } = req.body;

  try {
    const newUser = new User({ username, email, phone, password });
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ message: "Server error while registering" });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
});


module.exports = router;
