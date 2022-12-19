var express = require('express');
var router = express.Router();

//define endpoints for songs resource

const evCars = require('../../models/ev-car');

//GET ALL EV CARS
router.get('/', (req, res) => {
  // res.send('GET ALL CARS ENDPOINT WAS REACHED');
  evCars.find((error, evCars) => {
    //handle if error occurred
    if (error) {
      console.log(error);
      res.status(500).json('This is an error');
    }
    console.log(evCars);
    res.status(200).json(evCars);
  });
});

//GET ONE EV CARS BY ID
router.get('/:id', (req, res) => {
  // res.send(`GET ONE CARS ENDPOINT WAS REACHED and the ID is ${req.params.id}`);
  evCars.findById(req.params.id, (error, cars) => {
    if (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
    if (!cars) {
      return res.status(404).json('Not found');
    }
    console.log(cars);
    res.status(200).json(cars);
  });
});

//CREATE EV CARS
router.post('/', (req, res) => {
  // res.send(`CREATE ONE CARS ENDPOINT WAS REACHED`);
  evCars.create(req.body, (error, saveCar) => {
    console.log(saveCar);
    res.status(200).json(saveCar);

    if (error) {
      console.log(error);
      res.status(500).json('Could not save ev_Car.');
    }
  });
});

//UPDATE EV CARS BY ID
router.put('/:id', (req, res) => {
  // res.send(`UPDATE CARS ENDPOINT WAS REACHED and then ID is ${req.params.id}`);
  evCars.updateOne(
    {
      _id: req.params.id,
    },
    req.body,
    (error, updatedCar) => {
      if (error) {
        res.json('Car was not updated.');
      }
      res.status(200).json(updatedCar);
    }
  );
});

//DELETE EV CARS BY ID
router.delete('/:id', (req, res) => {
  // res.send(`DELETE CARS ENDPOINT WAS REACHED and then ID is ${req.params.id}`);
  evCars.findByIdAndDelete(req.params.id, (error, deleteCar) => {
    if (error) {
      res.status(500).json("Error, couldn't delete.");
    }
    res.json('Car is deleted.');
  });
});

module.exports = router;
