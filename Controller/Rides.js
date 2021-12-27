const Rides = require('../Model/Rides');




exports.getRidesForType = (req, res) => {
    const rideType = req.params.type;
    Rides.find({type:rideType}).then(result => {
        res.status(200).json({
            message: `Rides fetched for type ${rideType}`,
            Rides: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            error: error
        });
    });
}