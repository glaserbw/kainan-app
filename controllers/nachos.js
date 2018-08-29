var db = require('../models');
var express = require('express');
var request = require('request');
var router = express.Router();



// Get the authorization helper function
var loggedIn = require('../middleware/loggedIn'); 

// Define routes
router.post('/', loggedIn, function(req, res){
		var searchQuery = req.body.search;
		// console.log(searchQuery);
		var searchUrl = 'https://developers.zomato.com/api/v2.1/locations?query=' + searchQuery + '&apikey=' + process.env.API_KEY;  
		// console.log(searchUrl);

	request(searchUrl, function(error, response, body) {
			console.log('body is: ', body)

	// 	res.render('nachos/index')
	// 	// console.log('search is: ', req.body)
	}); 
}); 


module.exports = router; 