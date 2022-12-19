const mongoose = require('mongoose');
//destructering
const { Schema } = mongoose;

const schemaVans = new Schema({
  van_name: String,
  van_brand: String,
  color: String,
  img: String,
  car_modal: [
    {
      year: String,
      name: String,
      aboutTheVan: String,
      address: String,
      companyName: String,
    },
  ],
  created_at: String,
  updated_at: String,
});

//generate the modal from the schema and export for use elsewhere
module.exports = mongoose.model('vans', schemaVans);
