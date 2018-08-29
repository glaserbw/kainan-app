var express = require('express');
var router = express.Router();
var db = require('../models');


// Get the authorization helper function
var loggedIn = require('../middleware/loggedIn'); 

// Define routes
router.get('/', loggedIn, function(req, res){
	// API CALL NEEDS TO GO HERE
	console.log('search is: ', req.body)

	res.render('nachos/index');
}); 


module.exports = router; 