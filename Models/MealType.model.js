const mongoose = require('mongoose');
const MealTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    content: {
        type: String,
        required: true
      },
    image: {
        type: String,
        required: true
      },
})

const MealType = mongoose.model('MealType',MealTypeSchema)

module.exports = MealType;