var db = require('../models');
var express = require('express');
var request = require('request');
var router = express.Router();

// Get the authorization helper function
var loggedIn = require('../middleware/loggedIn');

// ROUTE TO GET SEARCH RESULTS FROM HOMEPAGE QUERY 
router.post('/', loggedIn, function(req, res){
  // Accept: alphanumeric, underscore, comma, whitespace
	var searchQuery = req.body.search.replace(/[^\w\,\s]/g, '');
	var searchUrl = 'https://developers.zomato.com/api/v2.1/locations?query=' + searchQuery + '&apikey=' + process.env.API_KEY;

	request(searchUrl, function(error, response, body) {
		// look for city_id integer for next step
		var cityId = JSON.parse(body).location_suggestions[0].city_id;
    var resultUrl = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + cityId + '&entity_type=city&cuisines=112' + '&apikey=' + process.env.API_KEY;
    request(resultUrl, function(error, response, body){
      var restaurantList = JSON.parse(body);
      res.render('restaurants/index', {
        restaurants: restaurantList.restaurants,
        name: "Taylor" // ex. here to remind me of value pair relationships
      });
    });
	});
});


module.exports = router;

// &q=dish-nachos added in URL before api key in citySearch function



