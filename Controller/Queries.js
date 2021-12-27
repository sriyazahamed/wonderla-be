const Queries = require('../Model/Queries');
exports.sendQuery = (req, res) => {
    
    const {
        name,
        phNo,
        mailId,
        query
    } = req.body;

    const queryObj = new Queries({
        name,
        phNo,
        mailId,
        query
    });

    queryObj.save().then(result => {
        res.status(200).json({
            message: '',
            query: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            error: error
        });
    });
}



