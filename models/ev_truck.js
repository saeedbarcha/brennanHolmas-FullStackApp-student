const mongoose = require('mongoose');
//destructering
const { Schema } = mongoose;

const schemaEvTrucks = new Schema({
  ev_truck_name: String,
  ev_truck_brand: String,
  color: String,
  img: String,
  ev_truck_modal: [
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
module.exports = mongoose.model('evTrucks', schemaEvTrucks);
