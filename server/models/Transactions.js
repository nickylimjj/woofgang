var mongoose = require('mongoose')

// Create the MovieSchema
var TransactionSchema = new mongoose.Schema({
    purchase: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

module.exports = TransactionSchema
