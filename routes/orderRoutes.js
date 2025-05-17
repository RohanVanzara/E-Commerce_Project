const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/placeorder", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(200).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error("Error placing order:", err);
    res.status(500).json({ message: "Failed to place order" });
  }
});

router.get("/allorders", async (req, res) => {
  try {
      const orders = await Order.find();
      res.status(200).json(orders);
  } catch (err) {
      res.status(500).json({ message: "Failed to fetch orders" });
  }
});


module.exports = router;
