const express = require ("express");
const restaurantController = require ('../Controllers/city.controller.js');
const filterController = require ('../Controllers/restaurants.controller.js');
const mealtypeController = require ('../Controllers/mealType.controller.js');
const authController = require ('../Controllers/auth.controller.js');

const router = express.Router();


router.get('/list',restaurantController.getRestaurantsList);
router.post('/filter',filterController.filterRestaurants);
router.get('/meal',mealtypeController.getMealType);
router.post('/login',authController.loginUser);
router.post('/register',authController.registerUser);

module.exports = router; 