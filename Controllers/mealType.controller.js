const Meal = require("../Models/MealType.model.js");

exports.getMealType = async (req,res)=>{
  try {
    const mealtype = await Meal.find();
    res.json(mealtype);
  } catch (err) {
    res.status(500).json({error:err});
  }
}