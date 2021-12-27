const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const RidesSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
);





module.exports = mongoose.model('Rides', RidesSchema, 'Rides');