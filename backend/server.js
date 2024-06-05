// this is for the backend

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/users', userRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/restaurantdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
