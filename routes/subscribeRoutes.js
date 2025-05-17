const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ msg: "Email is required" });
  }

  try {
    // Check if already subscribed
    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(400).json({ msg: "Email is already subscribed" });
    }

    // Save to DB
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(200).json({ msg: "Subscription successful", subscriber: newSubscriber });
  } catch (err) {
    console.error("Subscription error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Get all subscribers
router.get("/subscribers", async (req, res) => {
  
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    res.status(500).json({ msg: "Server error" });
  }
});


module.exports = router;
