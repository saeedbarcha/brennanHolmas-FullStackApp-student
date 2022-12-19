const mongoose = require('mongoose');
//destructering
const { Schema } = mongoose;

const schemaTrucks = new Schema({
  truck_name: String,
  truck_brand: String,
  color: String,
  img: String,
  car_modal: [
    {
      year: String,
      name: String,
      aboutTheTruck: String,
      address: String,
      companyName: String,
    },
  ],
  created_at: String,
  updated_at: String,
});

//generate the modal from the schema and export for use elsewhere
module.exports = mongoose.model('trucks', schemaTrucks);
