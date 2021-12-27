const Facilities = require('../Model/Facilities');




exports.getFacilities = (req, res) => {
    Facilities.find().then(result => {
        res.status(200).json({
            message: `Facilities fetched`,
            facilities: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            error: error
        });
    });
}