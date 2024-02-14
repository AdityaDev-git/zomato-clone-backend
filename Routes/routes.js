const express = require ("express");
const locationController = require ('../Controllers/city.controller.js');
const resturantController = require ('../Controllers/restaurants.controller.js');
const mealtypeController = require ('../Controllers/mealType.controller.js');

const router = express.Router();


router.get('/city',locationController.getCityList);
router.post('/filter',resturantController.filterRestaurants);
router.get('/meal',mealtypeController.getMealType);

module.exports = router; 