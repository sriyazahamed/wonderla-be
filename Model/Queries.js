const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const QueriesSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        phNo: {
            type: String,
            required: true
        },
        mailId: {
            type: String,
            required: true
        },
        query: {
            type: String,
            required: true
        }
    }
);





module.exports = mongoose.model('Queries', QueriesSchema, 'Queries');