const express = require ("express");
const restaurantController = require ('../Controllers/city.controller.js');
const filterController = require ('../Controllers/restaurants.controller.js');
const mealtypeController = require ('../Controllers/mealType.controller.js');

const router = express.Router();


router.get('/list',restaurantController.getRestaurantsList);
router.post('/filter',filterController.filterRestaurants);
router.get('/meal',mealtypeController.getMealType);

module.exports = router; 