var express = require('express');
var router = express.Router();

//DEFINE ANY SUB-ROUTERS OF OUR API
//SONGS ROUTER
var songsRouter = require('./songs');
router.use('/songs', songsRouter);

//USERS ROUTER
var usersRouter = require('./users');
router.use('/users', usersRouter);

//CARS ROUTER
var carsRouter = require('./cars');
router.use('/cars', carsRouter);

//TRUCKS ROUTER
var trucksRouter = require('./trucks');
router.use('/trucks', trucksRouter);

//VANS ROUTER
var vansRouter = require('./vans');
router.use('/vans', vansRouter);

//EV CARS ROUTER
var evCarsRouter = require('./ev-cars');
router.use('/evCar', evCarsRouter);

//EV TRUCKS ROUTER
var evTrucksRouter = require('./ev-trucks');
const app = require('../../app');
router.use('/evTrucks', evTrucksRouter);

//EV VANS ROUTER
// var evVansRouters = require('./ev-vans');
// router.use('/evVans', evVansRouters);

//OUR WELCOME ENDPOINT
router.get('/', (req, res) => {
  res.send('Welcome to our API!!! :)');
});

module.exports = router;
