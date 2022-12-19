var express = require('express');
var router = express.Router();

const evTrucks = require('../../models/ev_truck');

//define endpoints for songs resource

//GET ALL EV TRUCKS

router.get('/', (req, res) => {
  // res.send('GET ALL CARS ENDPOINT WAS REACHED');
  evTrucks.find((error, ev_trucks) => {
    //handle if error occured
    if (error) {
      console.log(error);
      res.status(500).json('This is an error');
    }

    if (!ev_trucks) {
      res.status(404).json("Couldn't find a ev_truck");
    }
    console.log(ev_trucks);
    res.status(200).json(ev_trucks);
  });
});

//GET ONE EV TRUCKS BY ID
router.get('/:id', (req, res) => {
  // res.send(`GET ONE CARS ENDPOINT WAS REACHED and the ID is ${req.params.id}`);
  evTrucks.findById(req.params.id, (error, evtrucks) => {
    if (error) {
      return res.status(400).json(`Error: ${error.message}`);
    }

    if (!evtrucks) {
      return res.status(404).json('Not found');
    }
    // res.send(cars);
    console.log(evtrucks);
    res.json(evtrucks);
  });
});

//CREATE EV TRUCKS
router.post('/', (req, res) => {
  // res.send(`CREATE ONE CARS ENDPOINT WAS REACHED`);
  evTrucks.create(req.body, (error, saveTrucks) => {
    console.log(saveTrucks);
    res.status(200).json(saveTrucks);

    if (error) {
      console.log(error);
      res.status(404).json('There was an error.');
    }

    if (!saveTrucks) {
      res.status(500).json('Could not find ev_truck.');
    }
  });
});

//UPDATE EV TRUCKS BY ID
router.put('/:id', (req, res) => {
  // res.send(`UPDATE CARS ENDPOINT WAS REACHED and then ID is ${req.params.id}`);
  evTrucks.updateOne(
    {
      _id: req.params.id,
    },
    req.body,
    (error, updatedCar) => {
      if (error) {
        res.json('There was an error.');
      }
      res.status(200).json(updatedCar);
    }
  );
});

//DELETE EV TRUCKS BY ID
router.delete('/:id', (req, res) => {
  // res.send(`DELETE CARS ENDPOINT WAS REACHED and then ID is ${req.params.id}`);
  evTrucks.findByIdAndDelete(req.params.id, (error, deleteTruck) => {
    if (error) {
      res.status(500).json("Error, couldn't delete.");
    }
    res.status(200).json('Truck is deleted.');
  });
});

module.exports = router;
