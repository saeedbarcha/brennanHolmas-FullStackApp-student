var express = require('express');
var router = express.Router();

//import the cars model
const Car = require('../../models/car');
// var validateToken = require('../../middleware/validateToken');

//define endpoints for cars resource

//GET ALL CARS
router.get('/', (req, res) => {
  // res.send('GET ALL CARS ENDPOINT WAS REACHED');
  Car.find((error, cars) => {
    //handle if error occurred
    if (error) {
      console.log(error);
      res.status(500).json('This is an error');
    }
    console.log(cars);
    res.status(200).json(cars);
  });
});

// //GET ONE CAR BY ID
router.get('/:id', (req, res) => {
  // res.send(`GET ONE CARS ENDPOINT WAS REACHED and the ID is ${req.params.id}`);
  Car.findById(req.params.id, (error, cars) => {
    if (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }

    if (!cars) {
      return res.status(404).json('Not found');
    }
    // res.send(cars);
    console.log(cars);
    res.status(200).json(cars);
  });
});

// //CREATE CARS
router.post('/', (req, res) => {
  // res.send(`CREATE ONE CARS ENDPOINT WAS REACHED`);
  Car.create(req.body, (error, saveCar) => {
    console.log(saveCar);
    res.status(200).json(saveCar);
    if (error) {
      console.log(error);
      res.status(404).json('Error could not create car.');
    }
  });
});

// //UPDATE CARS BY ID
router.put('/:id', (req, res) => {
  // res.send(`UPDATE CARS ENDPOINT WAS REACHED and then ID is ${req.params.id}`);
  Car.updateOne(
    {
      _id: req.params.id,
    },
    req.body,
    (error, updatedCar) => {
      if (error) {
        res.status(404).json('Car was not updated, there was a error.');
      }
      res.status(200).json(updatedCar);
    }
  );
});

//DELETE CARS BY ID
router.delete('/:id', (req, res) => {
  // res.send(`DELETE CARS ENDPOINT WAS REACHED and then ID is ${req.params.id}`);
  Car.findByIdAndDelete(req.params.id, (error, deleteCar) => {
    res.json('Car is deleted.');
  });
});

module.exports = router;
