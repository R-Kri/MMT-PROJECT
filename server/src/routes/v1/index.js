const express =  require('express');

const {InfoController } = require('../../controllers')

const flightRoutes = require('./flight-routes')

const router = express.Router();

router.use('/flights', flightRoutes);

router.get('/info', InfoController.info);

module.exports = router;