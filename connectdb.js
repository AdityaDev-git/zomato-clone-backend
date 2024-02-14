const mongoose = require ("mongoose");

const URI = 'mongodb://localhost:27017/ProjectZomato'; 

const connectDB = ()=>{
    return mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
}

module.exports = connectDB;