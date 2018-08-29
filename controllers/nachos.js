var db = require('../models');
var express = require('express');
var request = require('request');
var router = express.Router();

// Get the authorization helper function
var loggedIn = require('../middleware/loggedIn'); 

var restaurantList; 
var dataToPass;

// Define routes
router.post('/', loggedIn, function(req, res){
		var searchQuery = req.body.search;
		// console.log(searchQuery);
		var searchUrl = 'https://developers.zomato.com/api/v2.1/locations?query=' + searchQuery + '&apikey=' + process.env.API_KEY;  	

	request(searchUrl, function(error, response, body) {
		// parse the response from search URL into a readable form
		var parsedJson = JSON.parse(body); 
		// take parsed date and look for city_id integer for next step 
		var cityId = parsedJson.location_suggestions[0].city_id;
		// Invoke the cityId function created for getting Nacho listings 
		citySearch(cityId);
	})
	res.render('nachos/index', dataToPass);
});

// this function takes the users location search and reqests Nacho specific restaurant listings using their cityId
var citySearch = function(cityId){
	var resultUrl = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + cityId + '&entity_type=city&q=dish-nacho' + '&apikey=' + process.env.API_KEY;
	console.log(resultUrl);
	request(resultUrl, function(error, response, body){
		restaurantList = JSON.parse(body); 
		console.log(restaurantList.restaurants[0].restaurant.name);
		dataToPass = {
			restaurants: restaurantList.restaurants,
			name: "Taylor" // ex. here to remind me of value pair relationships 
		}
	});
} 


module.exports = router; 



