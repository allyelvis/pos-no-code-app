const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/sales', async (req, res) => {
    const { products, total, customer } = req.body;
    // Process sale and deduct stock from the inventory
    res.status(201).send({ message: 'Sale processed successfully!' });
});

module.exports = router;
