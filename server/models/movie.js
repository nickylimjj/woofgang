// Gives us an interface for MongoDB - models that map into the MongoDB database
var mongoose = require('mongoose'); 

// Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
   title: {
    type: String,
    required: true
  },
   url: {
    type: String,
    required: true
  },
   count: {
    type: Number,
    required: false
   }
});

// Export the model
module.exports = MovieSchema;

