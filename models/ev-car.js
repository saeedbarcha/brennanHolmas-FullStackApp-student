const mongoose = require('mongoose');
//destructuring
const { Schema } = mongoose;

const schemaEvCars = new Schema({
  ev_car_name: String,
  ev_car_brand: String,
  color: String,
  img: String,
  car_modal: [
    {
      year: String,
      name: String,
      aboutTheEvCar: String,
      address: String,
      companyName: String,
    },
  ],
  created_at: String,
  updated_at: String,
});

//generate the modal from the schema and export for use elsewhere
module.exports = mongoose.model('evCar', schemaEvCars);
