var express = require('express');
var router = express.Router();

//define endpoints for songs resource

const vans = require('../../models/van');

//GET ALL SONGS
router.get('/', (req, res) => {
  // res.send('GET ALL CARS ENDPOINT WAS REACHED');
  vans.find((error, vans) => {
    //handle if error occured
    if (error) {
      console.log(error);
      res.status(500).json('This is an error');
    }
    console.log(vans);
    res.status(200).json(vans);
  });
});

//GET ONE SONG BY ID
router.get('/:id', (req, res) => {
  // res.send(`GET ONE CARS ENDPOINT WAS REACHED and the ID is ${req.params.id}`);
  vans.findById(req.params.id, (error, vans) => {
    if (error) {
      return res.status(400).json(`Error: ${error.message}`);
    }

    if (!vans) {
      return res.status(404).json('Not found');
    }
    // res.send(cars);
    console.log(vans);
    res.json(vans);
  });
});

//CREATE SONG
router.post('/', (req, res) => {
  // res.send(`CREATE ONE TRUCKS ENDPOINT WAS REACHED`);
  vans.create(req.body, (error, saveVan) => {
    console.log(saveVan);
    res.status(201).json(saveVan);

    if (error) {
      console.log(error);
    }
  });
});

//UPDATE SONG BY ID
router.put('/:id', (req, res) => {
  // res.send(`UPDATE CARS ENDPOINT WAS REACHED and then ID is ${req.params.id}`);
  vans.updateOne(
    {
      _id: req.params.id,
    },
    req.body,
    (error, updatedVan) => {
      if (error) {
        res.json('Van was not updated.');
      }
      res.json(updatedVan);
    }
  );
});

//DELETE SONG BY ID
router.delete('/:id', (req, res) => {
  // res.send(`DELETE CARS ENDPOINT WAS REACHED and then ID is ${req.params.id}`);
  vans.findByIdAndDelete(req.params.id, (error, deleteVan) => {
    if (error) {
      res.json("Error, couldn't delete.");
    }
    res.json('Truck is deleted.');
  });
});

module.exports = router;
