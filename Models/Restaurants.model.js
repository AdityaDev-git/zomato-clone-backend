const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
name:{
    type: String,
    required: true
},
desc: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true
},
img: {
    type: String,
    required: true
},
type: {
    type: String,
    required: true
}
})

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      locality: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      thumb: {
        type: String,
        required: true
      },
      cost: {
        type: Number,
        required: true
      },
      contact_number: {
        type: Number,
        required: true
      },
      type: [{
        mealtype: Number,
        name: String
      }],
      Cuisine: [
        {
          cuisine: Number,
          name: String
      }],
      menu:[menuSchema]
})

const Restaurants = mongoose.model('Restaurants',RestaurantSchema)

module.exports = Restaurants;