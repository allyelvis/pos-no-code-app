const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    description: String,
});

module.exports = mongoose.model('Product', ProductSchema);