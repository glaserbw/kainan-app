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
		var cityId; 
	request(searchUrl, function(error, response, body) {
		// console.log('body is: ', body);
		var parsedJson = JSON.parse(body); 
		// console.log(parsedJson);
		cityId = parsedJson.location_suggestions[0].city_id;
		// console.log('city id is: ', cityId);
		var resultUrl = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + cityId + '&entity_type=city&q=dish-nacho' + '&apikey=' + process.env.API_KEY;
		// console.log('resultUrl: ', resultUrl);
		res.render('nachos/index')
	}); 
}); 


module.exports = router; 



