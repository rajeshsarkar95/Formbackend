const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add a new product (POST)
router.post('/add', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const product = new Product({ name, price, description });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
