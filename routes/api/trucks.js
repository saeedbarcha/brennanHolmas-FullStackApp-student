var express = require('express');
var router = express.Router();

//define endpoints for songs resource

const Trucks = require('../../models/truck');

//GET ALL TRUCKS
router.get('/', (req, res) => {
  // res.send('GET ALL CARS ENDPOINT WAS REACHED');
  Trucks.find((error, trucks) => {
    //handle if error occured
    if (error) {
      console.log(error);
      res.status(500).json('This is an error');
    }
    console.log(trucks);
    res.status(200).json(trucks);
  });
});

//GET ONE trucks BY ID
router.get('/:id', (req, res) => {
  // res.send(`GET ONE CARS ENDPOINT WAS REACHED and the ID is ${req.params.id}`);
  Trucks.findById(req.params.id, (error, trucks) => {
    if (error) {
      return res.status(400).json(`Error: ${error.message}`);
    }

    if (!trucks) {
      return res.status(404).json('Not found');
    }
    // res.send(cars);
    console.log(trucks);
    res.json(trucks);
  });
});

//CREATE trucks
router.post('/', (req, res) => {
  // res.send(`CREATE ONE TRUCKS ENDPOINT WAS REACHED`);
  Trucks.create(req.body, (error, saveTruck) => {
    console.log(saveTruck);
    res.status(201).json(saveTruck);

    if (error) {
      console.log(error);
      res.status(500).json('There was a error.');
    }
  });
});

//UPDATE SONG BY ID
router.put('/:id', (req, res) => {
  // res.send(`UPDATE CARS ENDPOINT WAS REACHED and then ID is ${req.params.id}`);
  Trucks.updateOne(
    {
      _id: req.params,
    },
    req.body,
    (error, updatedTruck) => {
      if (error) {
        res.json('Truck was not updated.');
      }
      res.status(200).json(updatedTruck);
    }
  );
});

//DELETE TRUCKS BY ID
router.delete('/:id', (req, res) => {
  // res.send(`DELETE CARS ENDPOINT WAS REACHED and then ID is ${req.params.id}`);
  Trucks.findByIdAndDelete(req.params.id, (error, deleteTruck) => {
    if (error) {
      res.json("Error, couldn't delete.");
    }
    res.status(200).json('Truck is deleted.');
  });
});

module.exports = router;
