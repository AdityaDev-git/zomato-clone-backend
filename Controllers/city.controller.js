const Restaurants = require("../Models/Restaurants.model.js");

exports.getRestaurantsList = async (req,res)=>{
  try{
    const restaurantslist = await Restaurants.find();
    res.json(restaurantslist);
  } catch(err){
    res.status(500).json({error:err});
  }
}