// UsersController.js
var restful = require('node-restful')

module.exports = function(app, route) {

    // Setup the controller for REST
    var rest = restful.model(
        'user',
        app.models.user
    ).methods(['get', 'put', 'post', 'delete']) // methods are exposed to user

    // Register this endpoint with the application
    rest.register(app, route)

    // Return to middleware
    return function(req, res, next) {
        next()
    }
}