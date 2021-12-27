const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const FacilitiesSchema = new Schema(
    {
        name: {
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





module.exports = mongoose.model('Facilities', FacilitiesSchema, 'Facilities');