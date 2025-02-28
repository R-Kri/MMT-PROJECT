const {StatusCodes} = require('http-status-codes')
const {FlightService} = require("../services");

async function createFlight(req, res){
    try {
        
        const flight = await FlightService.createFlight({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully created an flight',
                    data: flight,
                    error: {}
                })
    } catch (error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating a flight',
                    data: {},
                    error: error
                })
    }
}

module.exports = {
    createFlight
}