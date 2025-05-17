const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const User = require('./models/User');
const orderRoutes = require("./routes/orderRoutes");
const dotenv = require('dotenv');
const feedbackRoutes = require('./routes/feedbackRoutes');


const app = express();
const PORT = 8081;
//=========Registration==========// 

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/registrationDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB connection error:", err));

// Routes
app.use("/signup", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//Admin Register
app.get("/admin/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
});


//=========User Feedback==========// 
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/feedback', feedbackRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/feedbacks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})
.catch((error) => {
  console.error('MongoDB connection failed:', error.message);
});





//=========Place order==========// 
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/registrationDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/", orderRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



//=========Subscriber==========// 
const connectDB = require("./config/db");
const subscribeRoutes = require("./routes/subscribeRoutes");
//Connect to DB
connectDB();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// // Routes
app.use("/api", subscribeRoutes);

// // Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
