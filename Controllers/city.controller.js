const Restaurants = require("../Models/Restaurants.model.js");

exports.getCityList = async (req,res)=>{
  try{
    const location = await Restaurants.find();("city");
    res.json(location);
  } catch(err){
    res.status(500).json({error:err});
  }
}