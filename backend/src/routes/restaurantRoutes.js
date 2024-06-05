const express = require('express');
const { getAllRestaurants, getRestaurantById, createRestaurant } = require('../controllers/restaurantController');

const router = express.Router();

router.get('/', getAllRestaurants);
router.get('/:id', getRestaurantById);
router.post('/', createRestaurant);

module.exports = router;
