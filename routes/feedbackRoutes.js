const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Feedback error:', error);
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
});

// ✅ Get all feedbacks (for Admin)
router.get('/', async (req, res) => {
  try {
    const allFeedbacks = await Feedback.find();
    res.json(allFeedbacks);
  } catch (error) {
    res.status(500).send("Error fetching feedbacks");
  }
});


module.exports = router;
