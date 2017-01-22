// index.js
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var _ = require('lodash')

// Create the app
var app = express()

// Add Middleware needed for REST API
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method-Override'))

// CORS Support
// allows us to expose our API to all URLS accessing our server. "Going Public"
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

// Content routes
app.use('/hello', function(req, res, next) {
    res.send('hello world!') 
    next() // signal to go on to next Middleware
})
 
// Connect to MongoDB
var port = process.env.PORT || 3000

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:password@ds033915.mlab.com:33915/woofgang')
mongoose.connection.once('open', function() {

    // Load Models
    app.models = require('./models/index')

    // Load Routes
    var routes = require('./routes')
    _.each(routes, function(controller, route) {
        app.use(route, controller(app, route))
    }) // controller is Middleware as exported in controllers
    app.listen(port)
    console.log('listening to port ' + port)
})
