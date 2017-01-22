// This is the main file that our server runs on
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // Intercepts every request to use JSON encoding 
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support - CORS: Cross-Origin Resource Sharing
// Essentially exposes the HTTP API to any server access
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/hello', function(req, res, next) { // 'function' here is a callback function
  /* At the URL '/hello', pass in the function with a request (req) object, return a response (res), and give the ability to go on to the next middleware */
  res.send('Hello World!');
  next();  // If we don't have this next() callback, the callback will not be sent and our browser will hang
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/meanapp'); // 'localhost' is for local server, in this case, my PC
mongoose.connection.once('open', function() {
  // Load the models.
  app.models = require('./models/index');

    // Load the routes
    var routes = require('./routes');
    _.each(routes, function(controller, route) { 
        // Essentially 'each' iterates over all the routes
        // Calls the 'function' for each route, passing in the controller and route
        app.use(route, controller(app,route)); // Passing in the app and route to the controller (see moviecontroller.js)

    });

  console.log('Listening on port 3000...');
  app.listen(3000);
});