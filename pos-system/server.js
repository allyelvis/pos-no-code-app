const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const salesRoutes = require('./routes/sales');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/pos-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Failed to connect to MongoDB", err);
});

// Routes
app.use('/api', salesRoutes);

app.listen(PORT, () => {
    console.log();
});
